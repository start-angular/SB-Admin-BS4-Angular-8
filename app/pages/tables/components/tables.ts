import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'tables.html'
})

export class TableComponent {
	constructor(private _router: Router) { }
	gotoDashboard() {
		this._router.navigate(['Home']);
	}
}
