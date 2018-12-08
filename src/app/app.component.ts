import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';

import { NOTIFICATION_OPTIONS } from './shared/notification-options';
import { AppNotificationService } from './shared/providers/app-notification.service';
import { NotificationData } from './shared/model/notification-data';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './shared/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	encapsulation: ViewEncapsulation.None,
	animations: [ routerTransition ]
})
export class AppComponent implements OnInit {

	readonly NOTIFICATION_OPTIONS = NOTIFICATION_OPTIONS;

	constructor(private notificationsService: NotificationsService,
							private notifier: AppNotificationService) {}

	ngOnInit() {
		this.notifier.notificationStream$.subscribe((event: NotificationData) => {
			this.notificationsService.create(event.title, event.content, event.type);
		});
	}

	getState(outlet: RouterOutlet): string {
		return outlet.activatedRouteData.state;
	}
}
