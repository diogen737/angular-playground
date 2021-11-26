import { Component, ViewEncapsulation } from '@angular/core';

import * as firebase from 'firebase/compat/app';

import { AuthService } from './providers/auth.service';
import { environment } from '../../environments/environment';


@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss', '../shared/styles/landing-bg.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AuthComponent {

	signedIn: boolean;

	constructor(private authService: AuthService) {
		firebase.default.initializeApp(environment.firebase);
		this.authService.checkLinkSignin()
			.then(authService.isSignedIn)
			.then(signedIn => this.signedIn = signedIn);
	}
}
