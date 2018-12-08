import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss', '../shared/styles/landing-bg.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AuthComponent {

	signedIn: boolean;

	constructor(private authService: AuthService) {
		this.authService.checkLinkSignin()
			.then(authService.isSignedIn)
			.then(signedIn => this.signedIn = signedIn);
	}
}
