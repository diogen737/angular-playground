import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { StateSection, stateSections } from '@model/state-group';

@Component({
	selector: 'app-state-combobox',
	templateUrl: './state-combobox.component.html',
	styleUrls: ['./state-combobox.component.scss']
})
export class StateComboboxComponent implements OnInit {

	stateSectionOptions: Observable<StateSection[]>;
	@Input('fg') fg: FormGroup;

	ngOnInit() {
		this.stateSectionOptions = this.fg.get('state').valueChanges
			.pipe(
				startWith(''),	// to show autocomplete on initial input click
				map(val => {		// filter sections from the dictionary
					if (val) {
						return stateSections
							.map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
							.filter(group => group.names.length > 0);
					}
					return stateSections;
				})
			);
	}

	private _filter(opts: string[], letter: string): string[] {
		const filterValue = letter.toLowerCase();
		return opts.filter(opt => opt.toLowerCase().startsWith(filterValue));
	}

}
