import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnDestroy {
  authForm: FormGroup;
  isLogin = false;
  loading = false;
  errorMessage = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleForm(e) {
    e.preventDefault();
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.loading = true;
    const { email, password } = this.authForm.value;

    const authObservable = this.isLogin
      ? this.authService.signIn(email, password)
      : this.authService.signUp(email, password);

    authObservable.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {
        this.loading = false;
        this.router.navigateByUrl('main');
      },
      (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
