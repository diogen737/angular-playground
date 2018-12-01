import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppNotificationService } from '../../shared/providers/app-notification.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService,
							private notificationService: AppNotificationService) {}

	async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const loggedIn = await this.authService.isSignedIn();
		if (!loggedIn) {
			this.notificationService.notify('auth/not-authed');
			this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url } });
		}
		return loggedIn;
	}
}
