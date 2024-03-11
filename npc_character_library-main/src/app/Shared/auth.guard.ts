import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  // console.log('is auth, :', authService.isAuthenticated());
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/landing']);
    return false;
  }
};
