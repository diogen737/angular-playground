import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../providers/auth.service';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

	public redirectUrl: string;
	signInForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	constructor(private fb: FormBuilder, private authService: AuthService,
							private router: Router, private route: ActivatedRoute) {
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

	tryFacebookLogin(): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.authService.doFacebookAuth()
						.then(res => this.router.navigateByUrl(this.redirectUrl),
									err => console.log(err));
				} else {
					console.log('no login needed');
				}
			});
	}

	tryGithubLogin(): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.authService.doGithubAuth()
						.then(res => this.router.navigateByUrl(this.redirectUrl),
									err => console.log(err));
				} else {
					console.log('no login needed');
				}
			});
	}

	tryEmailLogin(): void {
		// console.log(this.signInForm);
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.authService.doEmailAuth(this.email.value, this.password.value)
						.then(res => this.router.navigateByUrl(this.redirectUrl),
									err => console.log(err));
				} else {
					console.log('no login needed');
				}
			})
		// this.authService.doEmailAuth()
	}

	public get email(): AbstractControl { return this.signInForm.get('email'); }
	public get password(): AbstractControl { return this.signInForm.get('password'); }
}
