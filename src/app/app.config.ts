import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HandsetService } from './shared/providers/handset.service';
import { AppNotificationService } from './shared/providers/app-notification.service';

export const AppRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'auth'
	},
	{
		path: 'material',
		loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'charts',
		loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

export const AppComponents = [
	AppComponent,
	NavComponent,
	NotFoundComponent
];

export const AppProviders = [
	HandsetService,
	AppNotificationService
];
