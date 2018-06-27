import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { StateSection, stateSections } from './state-group';
import { InfoPopupComponent } from '../info-popup/info-popup.component';

@Component({
	selector: 'app-misc',
	templateUrl: './misc.component.html',
	styleUrls: ['./misc.component.scss']
})
export class MiscComponent {

	gridGroup: FormGroup = this.fb.group({
		state: '',
		range: 0,
	});
	stepperGroup: FormGroup = this.fb.group({
		formArray: this.fb.array([
			this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
			}),
			this.fb.group({
				address: ''
			})
		])
	});

	stateSectionOptions: Observable<StateSection[]>;

	constructor(private fb: FormBuilder, private popup: MatDialog) {
		// Detect autocomplete changes (Grid tab)
		this.stateSectionOptions = this.gridGroup.get('state').valueChanges
			.pipe(
				startWith(''),
				map(val => {
					if (val) {
						return stateSections
							.map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
							.filter(group => group.names.length > 0);
					}
					return stateSections;
				})
			);
	}

	openPopup(): void {
		this.popup.open(InfoPopupComponent, {
			width: '350px',
			height: '300px',
			data: {
				firstName: this.formArray.get([0]).get('firstName').value,
				lastName: this.formArray.get([0]).get('lastName').value,
				address: this.formArray.get([1]).get('address').value,
			}
		});
	}

	get formArray(): AbstractControl | null { return this.stepperGroup.get('formArray'); }

	private _filter(opts: string[], letter: string): string[] {
		const filterValue = letter.toLowerCase();
		return opts.filter(opt => opt.toLowerCase().startsWith(filterValue));
	}

}
