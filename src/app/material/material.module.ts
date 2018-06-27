import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
	MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule,
	MatCardModule, MatGridListModule, MatTreeModule, MatTabsModule, MatAutocompleteModule,
	MatFormFieldModule, MatInputModule, MatSliderModule, MatStepperModule, MatSnackBarModule, MatDialogModule} from '@angular/material';

import { ModuleRoutes, ModuleComponents, ModuleProviders } from './material.config';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		ReactiveFormsModule,
		RouterModule.forChild(ModuleRoutes),
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
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
