import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HandsetService } from './shared/handset.service';

export const AppRoutes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'auth' },
	{ path: 'material', loadChildren: './material/material.module#MaterialModule' },
	{ path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
	{ path: '**', component: NotFoundComponent }
];

export const AppComponents = [
	AppComponent,
	NavComponent,
	NotFoundComponent
];

export const AppProviders = [
	HandsetService
];
