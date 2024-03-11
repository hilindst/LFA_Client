import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, catchError, tap } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    this.loadUserData();
  }

  private loadUserData() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData: User = JSON.parse(storedUserData);
      if (userData && new Date(userData.tokenExpirationDate) > new Date()) {
        this.loginUser.next(userData);
      }
    }
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `${environment.signUpUrl}${environment.firebaseAPIKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((res) =>
          this.handleAuth(res.email, res.localId, res.idToken, +res.expiresIn)
        ),
        catchError((error) => this.handleAuthError(error))
      );
  }

  signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `${environment.loginUrl}${environment.firebaseAPIKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((res) =>
          this.handleAuth(res.email, res.localId, res.idToken, +res.expiresIn)
        ),
        catchError((error) => this.handleAuthError(error))
      );
  }

  signOut(): void {
    this.loginUser.next(null);
    localStorage.clear();
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expDate);
    this.loginUser.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleAuthError(errorRes: any): Observable<never> {
    let errorMessage = 'An error occurred during the process.';

    if (
      errorRes.error &&
      errorRes.error.error &&
      errorRes.error.error.message
    ) {
      switch (errorRes.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password.';
          break;
        case 'USER_DISABLED':
          errorMessage =
            'The user account has been disabled by an administrator.';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Invalid login credentials.';
          break;
        default:
          errorMessage = 'Authentication failed. Please try again.';
      }
    }
    return throwError(() => new Error(errorMessage));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userData');
  }
}
