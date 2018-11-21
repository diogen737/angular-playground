import { NotificationType } from 'angular2-notifications';
import { NotificationData } from './model/notification-data';

export const NotificationMessages = {
	accoundDisabled:
		new NotificationData(NotificationType.Error, 'Account disabled', 'Your account has been disabled by an administrator'),
	alreadyAuthed:
		new NotificationData(NotificationType.Warn, 'Already authenticated', 'No need for sign in'),
	commonError:
		new NotificationData(NotificationType.Error, 'Error', 'Some error occured'),
	credentialsError:
		new NotificationData(NotificationType.Error, 'Wrong credentials', 'Please provide valid sign in credentials'),
	networkError:
		new NotificationData(NotificationType.Error, 'Network error', 'Check your internet connection'),
	noSigninNeeded:
		new NotificationData(NotificationType.Info, 'Info', 'No sign in needed'),
	notAuthed:
		new NotificationData(NotificationType.Warn, 'Not authenticated', 'You need to sign in to access the resource'),
	// weakPassword:
		// new NotificationData(NotificationType.Warn, 'Weak password', 'You need to sign in to access the resource'),
};
