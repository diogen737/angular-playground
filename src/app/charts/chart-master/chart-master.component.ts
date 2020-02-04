import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Company } from '@model/company';
import { companyToItem } from '@model/utils';
import { Item } from '@model/item';

import { CompaniesService } from '@providers/companies.service';


@Component({
	selector: 'app-charts',
	templateUrl: './chart-master.component.html',
	styleUrls: ['./chart-master.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ChartMasterComponent implements OnInit {

	public selectedCompanyId: number;
	public items: Item[];

	private companies: Company[];

	constructor(private companiesService: CompaniesService) {}

	ngOnInit() {
		this.companiesService.getCompanies()
			.subscribe((data: Company[]) => {
				this.companies = data.filter(company => company.monthRevenue > 0);
				this.items = this.companies.map(company => companyToItem(company));
			});
	}

	onCompanySelected(event: number): void {
		this.selectedCompanyId = event;
	}

}
