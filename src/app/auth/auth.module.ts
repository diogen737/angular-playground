import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

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
		MatTabsModule,
		MatTooltipModule,
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class AuthModule { }
