import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { NotificationData } from '../../shared/model/notification-data';
import { NotificationType } from '../../shared/model/notification-type';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService,
							private notificationService: AppNotificationService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		return this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.notificationService.notify(
						new NotificationData(NotificationType.WARN, 'Warning', 'You need to sign in to access this resource'));
					this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
				}
				return loggedIn;
			});
	}
}
