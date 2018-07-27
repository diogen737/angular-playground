import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './charts.config';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ModuleRoutes),
		NgxChartsModule,

		// material modules
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class ChartsModule { }
