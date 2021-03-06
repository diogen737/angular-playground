import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

import { AuthService } from '../providers/auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { matchValidator } from '../../shared/validators/match-validator';
import { PWD_PATTERN_STRONG, PWD_HINT_STRONG } from 'src/app/shared/auth-rules';
import { regexAllowValidator } from 'src/app/shared/validators/regexp-allow-validator';

@Component({
	selector: 'app-auth-login',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss', '../../shared/styles/landing-bg.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SigninComponent {

	private redirectUrl: string;
	PWD_PATTERN = PWD_PATTERN_STRONG;
	PWD_HINT = PWD_HINT_STRONG;

	selectedTab = new FormControl(0);

	signInForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});
	signUpForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, regexAllowValidator(this.PWD_PATTERN)]],
		passwordRepeat: ['', Validators.required]
	}, { validator: matchValidator });

	constructor(private fb: FormBuilder, private authService: AuthService,
							private router: Router, private route: ActivatedRoute,
							private notificationService: AppNotificationService) {
		this.redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
	}

	changeTab(event: MouseEvent, tabValue: number): void {
		event.preventDefault();
		this.selectedTab.setValue(tabValue);
	}

	tryGoogleSignin(): void {
		this.tryGivenSignin(this.authService.doGoogleAuth);
	}

	tryFacebookSignin(): void {
		this.tryGivenSignin(this.authService.doFacebookAuth);
	}

	tryGithubSignin(): void {
		this.tryGivenSignin(this.authService.doGithubAuth);
	}

	tryEmailSignin(): void {
		if (this.signInForm.valid) {
			this.tryGivenSignin(this.authService.doEmailAuth.bind(this, this.signinEmail.value, this.signinPassword.value));
		}
	}

	trySignUp(): void {
		if (this.signUpForm.valid) {
			this.authService.doSignUp(this.siginupEmail.value, this.siginupPassword.value)
				.then(() => {
					this.router.navigateByUrl('/auth');
					this.notificationService.notify('auth/verify-mail');
				})
				.catch(err => this.notificationService.notify(err.code));
		}
		// this.authService.doAuthWithEmailLink(this.siginupEmail.value);
	}

	private tryGivenSignin(loginActor: (email?: string, pwd?: string) => Promise<any>): void {
		loginActor()
			.then(res => {
				if (res.additionalUserInfo.providerId === 'password' && !res.user.emailVerified) {
					this.authService.doSignOut();
					throw { code: 'auth/mail-not-verified' };
				}
				this.router.navigateByUrl(this.redirectUrl);
			})
			.catch(err => this.notificationService.notify(err.code));
	}

	public get signinEmail(): AbstractControl { return this.signInForm.get('email'); }
	public get signinPassword(): AbstractControl { return this.signInForm.get('password'); }

	public get siginupEmail(): AbstractControl { return this.signUpForm.get('email'); }
	public get siginupPassword(): AbstractControl { return this.signUpForm.get('password'); }
	public get siginupPasswordRepeat(): AbstractControl { return this.signUpForm.get('passwordRepeat'); }
}
