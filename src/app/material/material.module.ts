import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
	MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule,
	MatCardModule, MatGridListModule, MatTreeModule, MatTabsModule, MatAutocompleteModule,
	MatFormFieldModule, MatInputModule, MatSliderModule, MatStepperModule, MatDialogModule,
	MatDatepickerModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './material.config';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		ReactiveFormsModule,
		RouterModule.forChild(ModuleRoutes),

		// Material modules
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatMomentDateModule,
		MatPaginatorModule,
		MatSidenavModule,
		MatSliderModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTreeModule,
	],
	entryComponents: [ InfoPopupComponent ],
	declarations: [ ModuleComponents ],
	providers: [ ModuleProviders ]
})
export class MaterialModule { }
