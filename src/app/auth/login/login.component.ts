import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

	public redirectUrl: string;

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
		this.redirectUrl = route.snapshot.queryParams['returnUrl'] || '/auth';
	}

	tryGoogleLogin(): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.authService.doGoogleAuth()
						.then(res => this.router.navigateByUrl(this.redirectUrl),
									err => console.log(err));
				} else {
					console.log('no login needed');
				}
			});
	}
}
