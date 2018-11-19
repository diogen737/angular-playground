export const environment = {
	production: true,
	firebase: {
		apiKey: 'AIzaSyDQdzy-pB5OcA57RTM2tY6_1LcZTo0lrss',
		authDomain: 'ng-playground-diogen737.firebaseapp.com',
		databaseURL: 'https://ng-playground-diogen737.firebaseio.com',
		projectId: 'ng-playground-diogen737',
		storageBucket: 'ng-playground-diogen737.appspot.com',
		messagingSenderId: '717958923709'
	},
	ntf: {
		notAuthed: {
			title: 'Not authenticated',
			msg: 'You need to sign in to access the resource'
		},
		alreadyAuthed: {
			title: 'Already authenticated',
			msg: 'No need for sign in'
		},
		noSigninNeeded: {
			title: 'Info',
			msg: 'No sign in needed'
		},
		networkError: {
			title: 'Network error',
			msg: 'Check your internet connection'
		},
	},
};
