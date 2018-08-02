import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { NOTIFICATION_OPTIONS } from './shared/notification-options';
import { AppNotificationService } from './shared/providers/app-notification.service';

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
		this.notifier.notificationStream$.subscribe((event: string) => {
			console.log(event);
			this.notificationsService.error('Title', event);
		});
	}
}
