import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { NotificationType } from 'angular2-notifications';

import { AuthService } from '../providers/auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { environment as env } from '../../../environments/environment';
import { NotificationData } from '../../shared/model/notification-data';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

	private redirectUrl: string;

	selectedTab = new FormControl(0);

	signInForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

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

	tryEmailLogin(event: Event): void {
		// prevent notification from showing up if the form is invalid
		// TODO: bind this - WTF?
		if (this.signInForm.valid) {
			this.tryGivenLogin(this.authService.doEmailAuth.bind(this, this.email.value, this.password.value));
		}
	}

	private tryGivenLogin(loginActor: (email?: string, pwd?: string) => Promise<any>): void {
		this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					loginActor()
						.then(() => this.router.navigateByUrl(this.redirectUrl))
						.catch(() => {
							const ntfs = env.ntf.networkError;
							this.notificationService.notify(new NotificationData(NotificationType.Error, ntfs.title, ntfs.msg));
						});
				} else {
					const ntfs = env.ntf.noSigninNeeded;
					this.notificationService.notify(new NotificationData(NotificationType.Info, ntfs.title, ntfs.msg));
				}
			});
	}

	public get email(): AbstractControl { return this.signInForm.get('email'); }
	public get password(): AbstractControl { return this.signInForm.get('password'); }
}
