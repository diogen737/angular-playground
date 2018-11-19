import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NotificationData } from '../model/notification-data';
import { NotificationMessages } from '../notification-messages';

@Injectable()
export class AppNotificationService {

	private notificationSource = new ReplaySubject<NotificationData>(1);
	public notificationStream$ = this.notificationSource.asObservable();

	public notify(code: string): void {

		let ntf: NotificationData;

		const notificationData = {
			'auth/user-not-found': () => ntf = NotificationMessages.userNotFound,
			'auth/wrong-password': () => ntf = NotificationMessages.credentialsError,
			'default': () => ntf = NotificationMessages.commonError
		};

		console.log(code);
		console.log(notificationData[code]);

		(notificationData[code] || notificationData['default'])();

		this.notificationSource.next(ntf);
	}
}
