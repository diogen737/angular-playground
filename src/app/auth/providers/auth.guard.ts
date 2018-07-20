import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		return this.authService.isLoggedIn()
			.then(loggedIn => {
				if (!loggedIn) {
					this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
				}
				return loggedIn;
			});
	}
}
