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
			'auth/user-not-found': () => ntf = NotificationMessages.credentialsError,
			'auth/wrong-password': () => ntf = NotificationMessages.credentialsError,
			'auth/invalid-email': () => ntf = NotificationMessages.credentialsError,
			'auth/not-authed': () => ntf = NotificationMessages.notAuthed,
			'auth/no-signin-needed': () => ntf = NotificationMessages.noSigninNeeded,
			'auth/user-disabled': () => ntf = NotificationMessages.accoundDisabled,
			'auth/verify-mail': () => ntf = NotificationMessages.verifyEmail,
			'auth/mail-not-verified': () => ntf = NotificationMessages.emailNotVerified,

			'auth/network-request-failed': () => ntf = NotificationMessages.networkError,

			'default': () => ntf = NotificationMessages.commonError
		};

		(notificationData[code] || notificationData['default'])();

		this.notificationSource.next(ntf);
	}
}
