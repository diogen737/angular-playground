import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { HandsetService } from '../shared/providers/handset.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit, OnDestroy {

	private handsetSubscription: Subscription;
	tooltipPosition: string;

	constructor(private handsetService: HandsetService) {}

	ngOnInit(): void {
		this.handsetSubscription = this.handsetService.handsetSubject
			.subscribe(isHandset => this.tooltipPosition = isHandset ? 'above' : 'left');
	}

	ngOnDestroy(): void {
		this.handsetSubscription.unsubscribe();
	}
}
