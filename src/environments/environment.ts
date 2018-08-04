// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
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
		noSigninNeeded: {
			title: 'Info',
			msg: 'No sign in needed'
		}
	},
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
