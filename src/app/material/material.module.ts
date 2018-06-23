import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule,
	MatPaginatorModule, MatSortModule, MatMenuModule, MatCardModule, MatGridListModule } from '@angular/material';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './material.config';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule.forChild(ModuleRoutes),
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatPaginatorModule,
		MatSidenavModule,
		MatSortModule,
		MatTableModule,
		MatToolbarModule,
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class MaterialModule { }
