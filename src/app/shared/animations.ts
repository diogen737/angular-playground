import {trigger, animate, style, group, animateChild, query, transition} from '@angular/animations';

const slideToLeft = [
	style({ position: 'relative' }),
	query(':enter, :leave', [
		style({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%'
		})
	], { optional: true }),
	query(':enter', [ style({ left: '100%'}) ], { optional: true }),
	query(':leave', animateChild(), { optional: true }),
	group([
		query(':leave', [
			animate('300ms', style({ left: '-100%'}))
		], { optional: true }),
		query(':enter', [
			animate('300ms', style({ left: '0%'}))
		], { optional: true })
	]),
	query(':enter', animateChild(), { optional: true }),
];

const slideToRight = [
	style({ position: 'relative' }),
	query(':enter, :leave', [
		style({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%'
		})
	], { optional: true }),
	query(':enter', [ style({ left: '-100%'}) ], { optional: true }),
	query(':leave', animateChild(), { optional: true }),
	group([
		query(':leave', [
			animate('300ms', style({ left: '100%'}))
		], { optional: true }),
		query(':enter', [
			animate('300ms', style({ left: '0'}))
		], { optional: true })
	]),
	query(':enter', animateChild(), { optional: true }),
];


export const routerTransition =
	trigger('routerTransition', [
		transition('auth-main => auth-signin', slideToLeft),
		transition('auth-signin => auth-main', slideToRight),
	]);
