import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';

import { NOTIFICATION_OPTIONS } from './shared/notification-options';
import { AppNotificationService } from './shared/providers/app-notification.service';
import { NotificationData } from './shared/model/notification-data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	encapsulation: ViewEncapsulation.None
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
}
