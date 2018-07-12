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
			this.sidenav.mode = this.isHandset ? 'over' : 'side';
			this.sidenav.opened = ! this.isHandset;
			this.toggleBtn.disabled = ! this.isHandset;
		});
	}

	toggleSidenav(): void {
		if (this.isHandset) {
			this.sidenav.toggle();
		}
	}

}
