import { Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { MaterialComponent } from './material.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ModuleRoutes: Routes = [
	{
		path: '',
		component: MaterialComponent,
		children: [
			{ path: 'table', component: TableComponent },
			{ path: 'dashboard', component: DashboardComponent },
		]
	}
];

export const ModuleComponents = [
	MaterialComponent,
	TableComponent,
	DashboardComponent,
	NavComponent,
];

export const ModuleProviders = [];
