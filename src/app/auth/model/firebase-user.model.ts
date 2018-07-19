import { User } from 'firebase';

export class FirebaseUser {

	private _name: string;
	private _email: string;
	private _image: string;

	constructor(usr: User) {
		this._name = usr.displayName;
		this._email = usr.email;
		this._image = usr.photoURL;
	}

	public get name(): string {
		return this._name;
	}
	public get email(): string {
		return this._email;
	}
	public get image(): string {
		return this._image;
	}
}
