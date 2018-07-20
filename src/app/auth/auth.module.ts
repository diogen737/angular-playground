import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './auth.config';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ModuleRoutes)
	],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class AuthModule { }
