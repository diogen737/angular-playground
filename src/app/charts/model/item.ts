export interface Item {
	id: number;
	name: string;
	category: string;
	weekStats: {
		monday: number;
		tuesday: number;
		wednesday: number;
		thursday: number;
		friday: number;
		saturday: number;
		sunday: number;
	};
	balance: number;
	monthBalance: number;
}
