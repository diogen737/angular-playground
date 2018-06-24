import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
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

	constructor(private media: ObservableMedia) {}

	ngOnInit(): void {
		this.media.subscribe(changes => {
				this.isHandset = changes.mqAlias === 'xs';
				this.sidenav.mode = changes.mqAlias === 'xs' ? 'over' : 'side';
				this.sidenav.opened = changes.mqAlias !== 'xs';
				this.toggleBtn.disabled = changes.mqAlias !== 'xs';
			});
	}

	toggleSidenav(): void {
		if (this.isHandset) {
			this.sidenav.toggle();
		}
	}

}
