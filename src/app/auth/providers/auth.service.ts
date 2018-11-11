import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { FirebaseUser } from '../model/firebase-user.model';

@Injectable()
export class AuthService {

	constructor(private fireAuth: AngularFireAuth) {}

	public doGoogleAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('profile');
			provider.addScope('email');
			this.fireAuth.auth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doFacebookAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.auth.FacebookAuthProvider();
			this.fireAuth.auth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doGithubAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.auth.GithubAuthProvider();
			this.fireAuth.auth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doEmailAuth = (email: string, pwd: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			this.fireAuth.auth.signInWithEmailAndPassword(email, pwd)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doLogout = (): Promise<void> => {
		return new Promise<void>((resolve, reject) => {
			firebase.auth().currentUser ? this.fireAuth.auth.signOut().then(_ => resolve()) : reject();
		});
	}

	public getCurrentUser = (): Promise<FirebaseUser> => {
		return new Promise<FirebaseUser>((resolve, reject) => {
			firebase.auth().onAuthStateChanged(user => user ? resolve(new FirebaseUser(user)) : reject());
		});
	}

	public isLoggedIn = (): Promise<boolean> => {
		return new Promise<boolean>(resolve => {
			firebase.auth().onAuthStateChanged(user => resolve(user !== null));
		});
	}
}
