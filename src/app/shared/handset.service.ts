import { Injectable } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HandsetService {

	private handsetViewports = ['xs', 'sm'];
	private isHandset: boolean;
	public handsetSubject = new BehaviorSubject<boolean>(false);

	constructor(private media: ObservableMedia) {
		this.media.subscribe(changes => {
			this.isHandset = this.handsetViewports.includes(changes.mqAlias);
			this.handsetSubject.next(this.isHandset);
		});
	}
}
