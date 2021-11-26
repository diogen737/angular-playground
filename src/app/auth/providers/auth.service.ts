import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class AuthService {

	constructor(private fireAuth: AngularFireAuth) {}

	// TODO: replace 'any' in returning promises with appropriate types

	public doGoogleAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.default.auth.GoogleAuthProvider();
			provider.addScope('profile');
			provider.addScope('email');
			this.fireAuth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doFacebookAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.default.auth.FacebookAuthProvider();
			this.fireAuth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doGithubAuth = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			const provider = new firebase.default.auth.GithubAuthProvider();
			this.fireAuth.signInWithPopup(provider)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doEmailAuth = (email: string, pwd: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			this.fireAuth.signInWithEmailAndPassword(email, pwd)
				.then(res => resolve(res), err => reject(err));
		});
	}

	public doSignUp = (email: string, pwd: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			firebase.default.auth().createUserWithEmailAndPassword(email, pwd)
				.then(() => firebase.default.auth().currentUser.sendEmailVerification())
				.then(this.doSignOut)
				.then(resolve)
				.catch(err => reject(err));
		});
	}

	public doAuthWithEmailLink = (email: string): Promise<void> => {
		return new Promise((resolve, reject) => {
			const actionCodeSettings = {
				url: window.location.origin,
				handleCodeInApp: true
			};

			firebase.default.auth().sendSignInLinkToEmail(email, actionCodeSettings)
				.then(() => {
					window.localStorage.setItem('emailForSignin', email);
					resolve();
				})
				.catch(reject);
		});
	}

	public checkLinkSignin = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (firebase.default.auth().isSignInWithEmailLink(window.location.href)) {
				let signinEmail = window.localStorage.getItem('emailForSignin');
				if (!signinEmail) {
					signinEmail = window.prompt('Please provide your email for confirmation');
				}
				firebase.default.auth().signInWithEmailLink(signinEmail, window.location.href)
					.then(res => {
						window.localStorage.removeItem('emailForSignin');
						resolve(res);
					})
					.catch(reject);
			} else {
				resolve(null);
			}
		});
	}

	public doSignOut = (): Promise<void> => {
		return new Promise<void>(resolve => {
			this.fireAuth.signOut().then(() => resolve());
		});
	}

	public getCurrentUser = (): Promise<firebase.default.User> => {
		return new Promise<firebase.default.User>((resolve, reject) => {
			const user = firebase.default.auth().currentUser;
			user ? resolve(user) : reject();
		});
	}

	public isSignedIn = (): Promise<boolean> => {
		return new Promise<boolean>(resolve => {
			firebase.default.auth().onAuthStateChanged(user => resolve(user !== null));
		});
	}
}
