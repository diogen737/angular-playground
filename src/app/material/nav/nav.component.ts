import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav, MatButton } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
	selector: 'app-material-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

	@ViewChild('drawer') sidenav: MatSidenav;
	@ViewChild('sidenavToggler') toggleBtn: MatButton;
	isHandset: boolean;
	private handsetViewports = ['xs', 'sm'];

	constructor(private media: ObservableMedia) {}

	ngOnInit(): void {
		this.media.subscribe(changes => {
			this.isHandset = this.handsetViewports.includes(changes.mqAlias);
			this.sidenav.mode = this.handsetViewports.includes(changes.mqAlias) ? 'over' : 'side';
			this.sidenav.opened = ! this.handsetViewports.includes(changes.mqAlias);
			this.toggleBtn.disabled = ! this.handsetViewports.includes(changes.mqAlias);
		});
	}

	toggleSidenav(): void {
		if (this.isHandset) {
			this.sidenav.toggle();
		}
	}

}
