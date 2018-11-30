import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

	signedIn: boolean;

	constructor(private authService: AuthService) {
		this.authService.checkLinkSignin()
			.then(authService.isSignedIn)
			.then(signedIn => this.signedIn = signedIn);
	}
}
