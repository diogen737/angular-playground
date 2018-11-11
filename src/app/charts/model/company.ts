export interface Company {
	id: number;
	name: string;
	type: string;
	revenuePerWeek: {
		monday: number;
		tuesday: number;
		wednesday: number;
		thursday: number;
		friday: number;
		saturday: number;
		sunday: number;
	};
	revenue: number;
	monthRevenue: number;
}
