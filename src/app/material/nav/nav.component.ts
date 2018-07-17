import { Component, ViewChild, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatSidenav, MatButton } from '@angular/material';
import { HandsetService } from '../../shared/handset.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-material-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit, OnDestroy {

	@ViewChild('drawer') sidenav: MatSidenav;
	@ViewChild('sidenavToggler') sidenavToggler: MatButton;

	private handsetSubscription: Subscription;
	private handsetSubject: BehaviorSubject<boolean>;

	constructor(private handsetService: HandsetService) {}

	ngOnInit(): void {
		this.handsetSubject = this.handsetService.handsetSubject;
		this.handsetSubscription = this.handsetSubject.subscribe(isHandset => {
			this.sidenav.mode = isHandset ? 'over' : 'side';
			this.sidenav.opened = ! isHandset;
			this.sidenavToggler.disabled = ! isHandset;
		});
	}

	toggleSidenav(): void {
		if (this.handsetSubject.value) {
			this.sidenav.toggle();
		}
	}

	ngOnDestroy(): void {
		this.handsetSubscription.unsubscribe();
	}
}
