import { Routes } from '@angular/router';

import { ChartMasterComponent } from './chart-master/chart-master.component';
import { ChartDisplayComponent } from './chart-display/chart-display.component';
import { CompaniesService } from './providers/companies.service';

export const ModuleRoutes: Routes = [
	{ path: '', component: ChartMasterComponent, pathMatch: 'full' },
];

export const ModuleComponents = [
	ChartMasterComponent,
	ChartDisplayComponent
];

export const ModuleProviders = [
	CompaniesService
];
