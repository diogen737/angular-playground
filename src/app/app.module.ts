import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutes, AppComponents, AppProviders } from './app.config';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(AppRoutes, { relativeLinkResolution: 'legacy' }),
		SimpleNotificationsModule.forRoot(),
		FlexLayoutModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

		// Material modules
		MatButtonModule,
		MatIconModule,
		MatSliderModule,
		MatTooltipModule,

		// Firebase modules
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule

	],
	declarations: [ AppComponents	],
	providers: [ AppProviders ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
