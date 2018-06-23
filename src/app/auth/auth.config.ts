import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

export const ModuleRoutes: Routes = [
	{ path: '', component: AuthComponent }
];

export const ModuleComponents = [
	AuthComponent
];

export const ModuleProviders = [];
