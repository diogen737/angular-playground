import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppNotificationService {

	private notificationSource = new BehaviorSubject<string>('');
	public notificationStream$ = this.notificationSource.asObservable();

	public notify(title: string): void {
		console.log('observer called in notification service');
		this.notificationSource.next(title);
	}

}
