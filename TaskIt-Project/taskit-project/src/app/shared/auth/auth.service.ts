import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, BehaviorSubject, throwError, catchError } from 'rxjs';
import { User } from "./user.model";


const AUTH_API_KEY = "AIzaSyCuqrPgNscdzRVuGCqfH-ObV_hVQG1qcxg";
const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";



export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  registered?: boolean;
  imagePath?: string;
}
@Injectable({
  providedIn: "root"
})

export class AuthService {
  isLoginMode = false;
  currentUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

  onSwitchAuthMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  signUp(email: string, password: string, imagePath?: string) {
    return this.http
      .post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError),
        tap(res => {
          // Use "Object Destructuring" to get access to all response values
          const { email, localId, idToken, expiresIn } = res;
          // Pass res values into handleAuth method
          this.handleAuth(email, localId, idToken, +expiresIn, imagePath);
        })
      );
  }

  signIn(email: string, password: string, imagePath?: string) {
    return this.http
      .post<AuthResponseData>(SIGN_IN_URL + AUTH_API_KEY, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError),
        tap(res => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn, imagePath);
        })
      );
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number, imagePath?: string) {
    // Create Expiration Date for Token
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create a new user based on the info passed in the form and emit that user
    const formUser = new User( email, userId, token, expDate, imagePath);
    this.currentUser.next(formUser);

    // Save the new user in localStorage
    localStorage.setItem("userData", JSON.stringify(formUser));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    console.log(errorRes);
    if (!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Invalid login credentials';
      }
    return throwError(errorMessage);
  }
}
