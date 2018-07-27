import { Company } from './company';
import { Item } from './item';

export const companyToItem = (company: Company): Item => {
	return {
		id: company.id,
		name: company.name,
		category: company.type,
		balance: company.revenue,
		monthBalance: company.monthRevenue,
		weekStats: Object.assign({}, company.revenuePerWeek)
	} as Item;
};
