import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { FirebaseUser } from '../model/firebase-user.model';

@Component({
	selector: 'app-auth-user',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class UserComponent implements OnInit {

	user: FirebaseUser;

	constructor(private authService: AuthService, private router: Router) {
		authService.getCurrentUser()
			.then((res: FirebaseUser) => {
				console.log(res);
				this.user = res;
			});
	}

	ngOnInit() {}

	tryLogout(): void {
		this.authService.doSignOut()
			.then(() => this.router.navigate(['/auth']));
	}
}
