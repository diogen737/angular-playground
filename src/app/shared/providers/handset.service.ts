import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HandsetService {

	private handsetViewports = ['xs', 'sm'];
	private isHandset: boolean;
	public handsetSubject = new BehaviorSubject<boolean>(false);

	constructor(private media: MediaObserver) {
		this.media.asObservable().subscribe((changes: MediaChange[]) => {
			this.isHandset = this.handsetViewports.includes(changes[0].mqAlias);
			this.handsetSubject.next(this.isHandset);
		});
	}
}
