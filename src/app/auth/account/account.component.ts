import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

import { AuthService } from '../providers/auth.service';

@Component({
	selector: 'app-auth-user',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss', '../../shared/styles/landing-bg.scss'],
	encapsulation: ViewEncapsulation.None
})
export class UserComponent {

	user: firebase.default.User;
	dateLastSignin: Date;
	dateCreated: Date;
	signinMethod: string;

	constructor(private authService: AuthService, private router: Router) {
		authService.getCurrentUser()
			.then((res: firebase.default.User) => {
				this.user = res;
				this.dateLastSignin = new Date(this.user.metadata.lastSignInTime);
				this.dateCreated = new Date(this.user.metadata.creationTime);
				this.signinMethod = res.providerData[0].providerId;
			});
	}

	tryLogout(): void {
		this.authService.doSignOut()
			.then(() => this.router.navigate(['/auth']));
	}
}
