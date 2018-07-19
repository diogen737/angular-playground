import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from './providers/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

	tryGoogleLogin(): void {
		this.authService.doGoogleAuth()
			.then(res => {
				console.log(res);
				this.router.navigate(['/auth/user']);
			}, err => console.log(err));
	}
}
