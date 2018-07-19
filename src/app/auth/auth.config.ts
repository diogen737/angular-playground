import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';

export const ModuleRoutes: Routes = [
	{ path: '', component: AuthComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'user', component: UserComponent, canActivate: [ AuthGuard ] }
];

export const ModuleComponents = [
	AuthComponent,
	UserComponent,
	LoginComponent
];

export const ModuleProviders = [
	AuthService,
	AuthGuard,
];
