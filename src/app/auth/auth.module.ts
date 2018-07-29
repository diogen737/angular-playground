import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './auth.config';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(ModuleRoutes),

		// Material modules
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class AuthModule { }
