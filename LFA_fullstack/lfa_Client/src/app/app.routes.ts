import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup.component').then((c) => c.SignupComponent)
  },
  {
    path: 'character/create',
    loadComponent: () => import('./features/create/character-create/character-create.component').then((c) => c.CharacterCreateComponent)
  },
  {
    path: 'adventure/create',
  loadComponent: () => import('./features/create/adventure-create/adventure-create.component').then((c) => c.AdventureCreateComponent)
  },
];
