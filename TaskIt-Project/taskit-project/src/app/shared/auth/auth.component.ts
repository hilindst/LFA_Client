import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  isLoginMode = this.authService.isLoginMode;
  error: string = null;
  authObsrv: Observable<AuthResponseData>;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    console.log(this.isLoginMode);
  }

  onSwitchAuthMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    // Validation check
    if (!formObj.valid) return;

    // Destructure the form input values
    const { email, password, name } = formObj.value

    let authObsrv: Observable<AuthResponseData>;

    // Conditional to see what mode we are in
    if (this.isLoginMode) {
      // Sign In Logic
      authObsrv = this.authService.signIn(email, password);
    } else {
      // Sign Up Logic
      authObsrv = this.authService.signUp(email, password, name);
    }

    // Observable logic with error handling
    authObsrv.subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    // Reset the form
    formObj.reset();
  }
}

