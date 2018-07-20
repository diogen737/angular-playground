import { Routes } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { NavComponent } from './nav/nav.component';
import { MaterialComponent } from './material.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiscComponent } from './misc/misc.component';
import { TreeComponent } from './tree/tree.component';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { StateComboboxComponent } from './state-combobox/state-combobox.component';
import { RU_DATE_FORMAT } from '../shared/datepicker-formats';

export const ModuleRoutes: Routes = [
	{
		path: '',
		component: MaterialComponent,
		children: [
			{ path: '', redirectTo: 'table', pathMatch: 'full' },
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
	TreeComponent,
	InfoPopupComponent,
	StateComboboxComponent,
];

export const ModuleProviders = [
	{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
	// { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
	{ provide: MAT_DATE_FORMATS, useValue: RU_DATE_FORMAT }
];
