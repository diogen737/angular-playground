import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { Item } from '../model/item';

@Component({
	selector: 'app-chart-display',
	templateUrl: './chart-display.component.html',
	styleUrls: ['./chart-display.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ChartDisplayComponent implements OnInit {

	@Output() companySelected = new EventEmitter<number>();

	items: Item[];
	itemCategories: string[] = ['All'];
	itemNames: string[] = ['All'];
	selectedCategory = 'All';
	selectedName = 'All';

	monthBalance = 0;
	totalBalance = 0;
	viewData = [
		{ name: 'monday', value: 0 },
		{ name: 'tuesday', value: 0 },
		{ name: 'wednesday', value: 0 },
		{ name: 'thursday', value: 0 },
		{ name: 'friday', value: 0 },
		{ name: 'saturday', value: 0 },
		{ name: 'sunday', value: 0 },
	];

	ngOnInit() {
		// add unique categories to the list
		this.items.forEach(item => {
			if (this.itemCategories.indexOf(item.category) === -1) {
				this.itemCategories.push(item.category);
			}
		});

		this.fillNames();
		this.fillViewData();				// prepare data for the chart
		this.calculateBalances();
	}

	onCategoryChange(): void {
		this.selectedName = 'All';	// reset name selector
		this.fillNames();						// refill
		this.fillViewData();				// refill
		this.calculateBalances();		// recalculate
	}

	onNameChange(): void {
		this.fillViewData();
		this.calculateBalances();		// recalculate
	}

	onOpen(): void {
		if (this.selectedName !== 'All') {
			// TODO: // ADD IF NAMES AREN'T UNIQUE: item.foreach...
			const item = this.items.filter(it => it.name === this.selectedName)[0];
			this.companySelected.emit(item.id);
		}
	}

	private fillViewData(): void {
		// reset all values, we'll fill them all later; 0.0000000001 is for d3 bug with 0-values
		this.viewData.forEach(day => day.value = 0.0000000001);
		const item = this.getSelectedItem();
		if (item === null) {	// all companies selected
			// refill view data values
			this.items.forEach(it => {
				const isCurrentCategory = this.selectedCategory === it.category;
				const isAllCategories = this.selectedCategory === 'All';
				if (isCurrentCategory || isAllCategories) {
					// calculate summary week stats
					this.viewData.forEach(day => day.value += it.weekStats[day.name]);
				}
			});
		} else {	// single company selected
			this.viewData.forEach(day => day.value += item.weekStats[day.name]);
		}
		// reassign the array for the chart to update
		this.viewData = [...this.viewData];
	}

	private calculateBalances(): void {
		const item = this.getSelectedItem();
		if (item === null) {	// all companies selected
			this.monthBalance = 0;
			this.totalBalance = 0;
			this.items.forEach(it => {
				const isCurrentCategory = this.selectedCategory === it.category;
				const isAllCategories = this.selectedCategory === 'All';
				if (isCurrentCategory || isAllCategories) {
					this.monthBalance += it.monthBalance;
					this.totalBalance += it.balance;
				}
			});
		} else {	// single company selected
			this.monthBalance = item.monthBalance;
			this.totalBalance = item.balance;
		}
	}

	private fillNames(): void {
		// reset names list
		this.itemNames.splice(1);
		this.items.forEach(item => {
			// add names of the selected category / all categories
			if (this.selectedCategory === item.category || this.selectedCategory === 'All') {
				// TODO: ADD IF NAMES AREN'T UNIQUE : if (this.itemNames.indexOf(item.name) === -1)
				this.itemNames.push(item.name);
			}
		});
	}

	private getSelectedItem(): Item {
		// ASSUME THAT NAMES ARE UNIQUE
		return this.selectedName !== 'All' ? this.items.filter(it => it.name === this.selectedName)[0] : null;
	}
}
