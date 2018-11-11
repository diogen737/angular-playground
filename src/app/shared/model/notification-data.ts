import { NotificationType } from 'angular2-notifications';

export class NotificationData {
	private _type: NotificationType;
	private _title: string;
	private _content: string;

	constructor(type: NotificationType, title: string, content: string) {
		this._type = type;
		this._title = title;
		this._content = content;
	}

	get type(): NotificationType { return this._type; }
	get title(): string { return this._title; }
	get content(): string { return this._content; }
}
