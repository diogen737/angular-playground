import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

	signedIn: boolean;

	constructor(private authService: AuthService) {
		authService.isLoggedIn()
			.then(signedIn => this.signedIn = signedIn);
	}
}
