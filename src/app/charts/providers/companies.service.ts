import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { COMPANIES } from './data';
import { Company } from '../model/company';

@Injectable()
export class CompaniesService {

	public getCompanies(): Observable<Company[]> {
		return of(COMPANIES)
			.pipe(map(data => {
				const res: Company[] = [];
				data.companies.forEach(company => res.push( company as Company ));
				return res;
			}));
	}

}
