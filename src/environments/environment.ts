// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyBgf2xHzpR1Dpg85IljjpyWgPMctnjNkgw',
		authDomain: 'ng-yard.firebaseapp.com',
		databaseURL: 'https://ng-yard.firebaseio.com',
		projectId: 'ng-yard',
		storageBucket: 'ng-yard.appspot.com',
		messagingSenderId: '751570145661',
		appId: '1:751570145661:web:dd30a680ca103a48a67c14',
		measurementId: 'G-1V62QQL7ML'
	},
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
