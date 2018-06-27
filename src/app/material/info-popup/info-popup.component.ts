import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-info-popup',
	templateUrl: './info-popup.component.html',
	styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
