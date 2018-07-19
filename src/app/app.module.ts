import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatButtonModule, MatTooltipModule, MatSliderModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutes, AppComponents, AppProviders } from './app.config';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(AppRoutes),
		FlexLayoutModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		MatButtonModule,
		MatIconModule,
		MatSliderModule,
		MatTooltipModule,

		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule

	],
	declarations: [ AppComponents	],
	providers: [ AppProviders ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
