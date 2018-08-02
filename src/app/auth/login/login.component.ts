import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AuthService } from '../providers/auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { NotificationType } from '../../shared/model/notification-type';
import { NotificationData } from '../../shared/model/notification-data';

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
							private router: Router, private route: ActivatedRoute,
							private notificationService: AppNotificationService) {
		this.redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
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
		this.tryGivenLogin(this.authService.doEmailAuth.bind(this, this.email.value, this.password.value));
	}

	private tryGivenLogin(loginActor: (email?: string, pwd?: string) => Promise<any>): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					loginActor().then(res => this.router.navigateByUrl(this.redirectUrl), err => console.log(err));
				} else {
					this.notificationService.notify(new NotificationData(NotificationType.ERROR, 'Info', 'No login needed'));
				}
			});
	}

	public get email(): AbstractControl { return this.signInForm.get('email'); }
	public get password(): AbstractControl { return this.signInForm.get('password'); }
}
