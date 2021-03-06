import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {

	constructor(private fireAuth: AngularFireAuth) {}

	// TODO: replace 'any' in returning promises with appropriate types

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

	public doSignUp = (email: string, pwd: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			firebase.auth().createUserWithEmailAndPassword(email, pwd)
				.then(() => firebase.auth().currentUser.sendEmailVerification())
				.then(this.doSignOut)
				.then(resolve)
				.catch(err => reject(err));
		});
	}

	public doAuthWithEmailLink = (email: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			const actionCodeSettings = {
				url: window.location.origin,
				handleCodeInApp: true
			};
			firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
				.then(() => {
					window.localStorage.setItem('emailForSignin', email);
					resolve();
				})
				.catch(reject);
		});
	}

	public checkLinkSignin = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
				let signinEmail = window.localStorage.getItem('emailForSignin');
				if (!signinEmail) {
					signinEmail = window.prompt('Please provide your email for confirmation');
				}
				firebase.auth().signInWithEmailLink(signinEmail, window.location.href)
					.then(res => {
						window.localStorage.removeItem('emailForSignin');
						resolve(res);
					})
					.catch(reject);
			} else {
				resolve();
			}
		});
	}

	public doSignOut = (): Promise<void> => {
		return new Promise<void>(resolve => {
			this.fireAuth.auth.signOut().then(() => resolve());
		});
	}

	public getCurrentUser = (): Promise<firebase.User> => {
		return new Promise<firebase.User>((resolve, reject) => {
			const user = firebase.auth().currentUser;
			user ? resolve(user) : reject();
		});
	}

	public isSignedIn = (): Promise<boolean> => {
		return new Promise<boolean>(resolve => {
			firebase.auth().onAuthStateChanged(user => resolve(user !== null));
		});
	}
}
