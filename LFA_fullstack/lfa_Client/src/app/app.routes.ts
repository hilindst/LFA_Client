import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./landing/landing.component').then((c) => c.LandingComponent),
	},
];
