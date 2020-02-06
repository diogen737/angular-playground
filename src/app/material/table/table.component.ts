import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { TableDataSource } from '@model/table-datasource';


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	public displayedColumns = ['id', 'name'];
	public dataSource: TableDataSource;

	ngOnInit() {
		this.dataSource = new TableDataSource(this.paginator, this.sort);
	}
}
