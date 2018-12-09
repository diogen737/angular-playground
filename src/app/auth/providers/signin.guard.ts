import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';

@Injectable()
export class SignInGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService,
							private notificationService: AppNotificationService) {}

	async canActivate(): Promise<boolean> {
		const loggedIn = await this.authService.isSignedIn();
		if (loggedIn) {
			this.notificationService.notify('auth/no-signin-needed');
			this.router.navigate(['/']);
		}
		return !loggedIn;
	}
}
