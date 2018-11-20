import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { NotificationType } from 'angular2-notifications';

import { AuthService } from '../providers/auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { environment as env } from '../../../environments/environment';
import { NotificationData } from '../../shared/model/notification-data';
import { matchValidator } from '../../shared/validators/match-validator';

@Component({
	selector: 'app-auth-login',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SigninComponent {

	private redirectUrl: string;

	selectedTab = new FormControl(1);

	signInForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});
	signUpForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
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

	tryGoogleLogin(): void {
		this.tryGivenLogin(this.authService.doGoogleAuth);
	}

	tryFacebookLogin(): void {
		this.tryGivenLogin(this.authService.doFacebookAuth);
	}

	tryGithubLogin(): void {
		this.tryGivenLogin(this.authService.doGithubAuth);
	}

	tryEmailLogin(): void {
		if (this.signInForm.valid) {
			this.tryGivenLogin(this.authService.doEmailAuth.bind(this, this.signinEmail.value, this.signinPassword.value));
		}
	}

	trySignUp(): void {
		if (this.signUpForm.valid) {
			this.authService.doSignUp(this.siginupEmail.value, this.siginupPassword.value)
				.then(res => console.log(res))
				.catch(err => console.error(err));
		}
	}

	private tryGivenLogin(loginActor: (email?: string, pwd?: string) => Promise<any>): void {
		loginActor()
			.then(() => this.router.navigateByUrl(this.redirectUrl))
			.catch(err => this.notificationService.notify(err.code));
	}

	public get signinEmail(): AbstractControl { return this.signInForm.get('email'); }
	public get signinPassword(): AbstractControl { return this.signInForm.get('password'); }

	public get siginupEmail(): AbstractControl { return this.signUpForm.get('email'); }
	public get siginupPassword(): AbstractControl { return this.signUpForm.get('password'); }
	public get siginupPasswordRepeat(): AbstractControl { return this.signUpForm.get('passwordRepeat'); }
}
