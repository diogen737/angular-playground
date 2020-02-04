import { Injectable } from '@angular/core';

import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class HandsetService {

	private readonly handsetViewports = ['xs', 'sm'];

	public handsetSubject = new BehaviorSubject<boolean>(false);

	constructor(private media: MediaObserver) {
		this.media.asObservable().subscribe(changes => {
			const isHandset = changes.some(ch => this.handsetViewports.includes(ch.mqAlias));
			this.handsetSubject.next(isHandset);
		});
	}
}
