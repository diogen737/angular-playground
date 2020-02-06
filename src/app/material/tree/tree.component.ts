import { Component, ViewEncapsulation } from '@angular/core';

import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Observable, of as observableOf } from 'rxjs';

import { FileDatabase, FileNode, FileFlatNode } from '@model/material-data';


@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	encapsulation: ViewEncapsulation.None,
	providers: [ FileDatabase ]
})
export class TreeComponent {

	treeControl: FlatTreeControl<FileFlatNode>;

	treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

	dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

	constructor(database: FileDatabase) {
		this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
		this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

		database.dataChange.subscribe(data => {
			this.dataSource.data = data;
		});
	}

	transformer = (node: FileNode, level: number) => {
		const flatNode: FileFlatNode = {
			filename: node.filename,
			type: node.type,
			level: level,
			expandable: !!node.children
		};
		return flatNode;
	}

	private _getLevel = (node: FileFlatNode) => node.level;

	private _isExpandable = (node: FileFlatNode) => node.expandable;

	private _getChildren = (node: FileNode): Observable<FileNode[]> => {
		return observableOf(node.children);
	}

	hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

}
