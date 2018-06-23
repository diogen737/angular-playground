import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

	tooltipPosition: string;

	constructor(private media: ObservableMedia) {}

	ngOnInit(): void {
		this.media.subscribe(change => this.tooltipPosition = change.mqAlias === 'xs' ? 'above' : 'left');
	}

}
