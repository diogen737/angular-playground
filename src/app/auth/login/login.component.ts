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

	private redirectUrl: string;
	signInForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	constructor(private fb: FormBuilder, private authService: AuthService,
							private router: Router, private route: ActivatedRoute) {
		this.redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
	}

	tryGoogleLogin(): void {
		this.tryGivenLogin(this.authService.doGoogleAuth());
	}

	tryFacebookLogin(): void {
		this.tryGivenLogin(this.authService.doFacebookAuth());
	}

	tryGithubLogin(): void {
		this.tryGivenLogin(this.authService.doGithubAuth());
	}

	tryEmailLogin(): void {
		this.tryGivenLogin(this.authService.doEmailAuth(this.email.value, this.password.value));
	}

	private tryGivenLogin(loginActor: Promise<any>): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					loginActor.then(res => this.router.navigateByUrl(this.redirectUrl), err => console.log(err));
				} else {
					console.log('no login needed');
				}
			});
	}

	public get email(): AbstractControl { return this.signInForm.get('email'); }
	public get password(): AbstractControl { return this.signInForm.get('password'); }
}
