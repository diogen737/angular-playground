import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MaterialComponent {

	constructor(private router: Router, private route: ActivatedRoute) {
		this.router.navigate(['./misc'], { relativeTo: this.route }	);
	}

}
