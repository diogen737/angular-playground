import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationType } from 'angular2-notifications';

import { environment as env } from '../../../environments/environment';

import { AuthService } from './auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';
import { NotificationData } from '../../shared/model/notification-data';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService,
							private notificationService: AppNotificationService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		return this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					const ntfs = env.ntf.notAuthed;
					this.notificationService.notify(new NotificationData(NotificationType.Warn, ntfs.title, ntfs.msg));
					this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
				}
				return loggedIn;
			});
	}
}
