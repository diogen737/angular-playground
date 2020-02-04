import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
