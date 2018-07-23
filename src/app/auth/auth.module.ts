import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './auth.config';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ModuleRoutes),

		// Material modules
		MatButtonModule,
		MatCardModule,
		MatIconModule,
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class AuthModule { }
