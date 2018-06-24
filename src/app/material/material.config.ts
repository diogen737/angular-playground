import { Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { MaterialComponent } from './material.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiscComponent } from './misc/misc.component';
import { TreeComponent } from './tree/tree.component';

export const ModuleRoutes: Routes = [
	{
		path: '',
		component: MaterialComponent,
		children: [
			{ path: 'table', component: TableComponent },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'tree', component: TreeComponent },
			{ path: 'misc', component: MiscComponent },
		]
	}
];

export const ModuleComponents = [
	MaterialComponent,
	TableComponent,
	DashboardComponent,
	NavComponent,
	MiscComponent,
	TreeComponent
];

export const ModuleProviders = [];
