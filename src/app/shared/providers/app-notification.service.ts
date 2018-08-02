import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NotificationData } from '../model/notification-data';

@Injectable()
export class AppNotificationService {

	private notificationSource = new ReplaySubject<NotificationData>(1);
	public notificationStream$ = this.notificationSource.asObservable();

	public notify(data: NotificationData): void {
		this.notificationSource.next(data);
	}
}
