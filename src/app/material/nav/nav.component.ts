import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatButton } from '@angular/material';

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

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.breakpointObserver.observe('(max-width: 960px)')
			.subscribe(result => {
				this.isHandset = result.matches;
				this.sidenav.mode = result.matches ? 'over' : 'side';
				this.sidenav.opened = ! result.matches;
				this.toggleBtn.disabled = ! result.matches;
			});
	}

	toggleSidenav(): void {
		if (this.isHandset) {
			this.sidenav.toggle();
		}
	}

}
