import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
	filename: string;
	type: any;
	level: number;
	expandable: boolean;
}


const TREE_DATA = `
  {
    "Documents": {
      "angular": {
        "src": {
          "core": "ts",
          "compiler": "ts"
        }
      },
      "material2": {
        "src": {
          "button": "ts",
          "checkbox": "ts",
          "input": "ts"
        }
      }
    },
    "Downloads": {
        "Tutorial": "html",
        "November": "pdf",
        "October": "pdf"
    },
    "Pictures": {
        "Sun": "png",
        "Woods": "jpg",
        "Photo Booth Library": {
          "Contents": "dir",
          "Pictures": "dir"
        }
    },
    "Applications": {
        "Chrome": "app",
        "Calendar": "app",
        "Webstorm": "app"
    }
}`;

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
	dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

	get data(): FileNode[] { return this.dataChange.value; }

	constructor() {
		this.initialize();
	}

	initialize() {
		// Parse the string to json object.
		const dataObject = JSON.parse(TREE_DATA);

		// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
		//     file node as children.
		const data = this.buildFileTree(dataObject, 0);
		// Notify the change.
		this.dataChange.next(data);
	}

	/**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
	buildFileTree(value: object, level: number): FileNode[] {
		const data: any[] = [];
		// tslint:disable-next-line:forin
		for (const key in value) {
			const v = value[key];
			const node = new FileNode();
			node.filename = `${key}`;
			if (v === null || v === undefined) {
				// no action
			} else if (typeof v === 'object') {
				node.children = this.buildFileTree(v, level + 1);
			} else {
				node.type = v;
			}
			data.push(node);
		}
		return data;
	}
}


