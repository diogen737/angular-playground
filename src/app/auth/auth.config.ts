import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { SignInGuard } from './providers/signin.guard';

export const ModuleRoutes: Routes = [
	{ path: '', component: AuthComponent, pathMatch: 'full' },
	{ path: 'signin', component: SigninComponent, canActivate: [ SignInGuard ] },
	{ path: 'user', component: UserComponent, canActivate: [ AuthGuard ] }
];

export const ModuleComponents = [
	AuthComponent,
	UserComponent,
	SigninComponent
];

export const ModuleProviders = [
	AuthService,
	AuthGuard,
	SignInGuard,
];
