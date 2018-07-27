import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { CompaniesService } from '../providers/companies.service';
import { Company } from '../model/company';
import { ChartDisplayComponent } from '../chart-display/chart-display.component';

import { companyToItem } from '../model/utils';

@Component({
	selector: 'app-charts',
	templateUrl: './chart-master.component.html',
	styleUrls: ['./chart-master.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ChartMasterComponent implements OnInit {

	@ViewChild(ChartDisplayComponent) private displayComponent: ChartDisplayComponent;
	private companies: Company[];
	selectedCompanyId: number;

	constructor(private companiesService: CompaniesService) {}

	ngOnInit() {
		this.companiesService.getCompanies()
			.subscribe((data: Company[]) => {
				this.companies = data.filter(company => company.monthRevenue > 0);
				this.displayComponent.items = this.companies.map(company => companyToItem(company));
			});
	}

	onCompanySelected(event: number): void {
		this.selectedCompanyId = event;
	}

}
