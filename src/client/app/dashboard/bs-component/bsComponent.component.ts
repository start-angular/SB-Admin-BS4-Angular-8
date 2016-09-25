import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

@Component({
	moduleId: module.id,
    selector: 'bs-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './bs-component.component.html',
    styles: [`
    	.tooltip.customClass .tooltip-inner {
    		color: #880000;
    		background-color: #ffff66;
    		box-shadow: 0 6px 12px rgba(0,0,0,.175);
    	}
    	.tooltip.customClass .tooltip-arrow {
    		display: none;
    	}
    `]
})

export class BSComponentComponent {

	@ViewChild('childModal') public childModal:ModalDirective;

	// Button
	public singleModel:string = '1';
	public radioModel:string = 'Middle';
	public checkModel:any = {left: false, middle: true, right: false};

	// Dropdown 
	public disabled:boolean = false;
	public status:{isopen:boolean} = {isopen: false};
	public items: Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];

	// Pagination
	public totalItems:number = 64;
	public currentPage:number = 4;

	public maxSize:number = 5;
	public bigTotalItems:number = 175;
	public bigCurrentPage:number = 1;

	// Alert
	public alerts: Array<Object> = [{
		type: 'danger',
		msg: 'Oh snap! Change a few things up and try submitting again.'
		},
		{
			type: 'success',
			msg: 'Well done! You successfully read this important alert message.',
			closable: true
		}
	];

	// Progressbar
	public max:number = 200;
	public showWarning:boolean;
	public dynamic:number;
	public type:string;
	public stacked:any[] = [];

	// Rating
	public x:number = 5;
	public y:number = 2;
	public maxRating:number = 10;
	public rate:number = 7;
	public isReadonly:boolean = false;

	public overStar:number;
	public percent:number;

	public ratingStates:any = [
		{stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
		{stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
		{stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
		{stateOn: 'fa fa-heart' },
		{stateOff: 'fa fa-power-off'}
	];

	// Tabs
	public tabs:Array<any> = [
	    {title: 'Title 1', content: 'Dynamic content 1'},
	    {title: 'Title 2', content: 'Dynamic content 2', disabled: true},
	    {title: 'Title 3', content: 'Dynamic content 3', removable: true}
	];

	// Typehead
	public selected:string = '';
	public asyncSelected:string = '';
	public typeaheadLoading:boolean = false;
	public typeaheadNoResults:boolean = false;
	public states:Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
	'California', 'Colorado',
	'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
	'Illinois', 'Indiana', 'Iowa',
	'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
	'Michigan', 'Minnesota',
	'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
	'New Jersey', 'New Mexico',
	'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
	'Pennsylvania', 'Rhode Island',
	'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
	'Virginia', 'Washington',
	'West Virginia', 'Wisconsin', 'Wyoming'];
	public statesComplex:Array<any> = [
	{id: 1, name: 'Alabama'}, {id: 2, name: 'Alaska'}, {id: 3, name: 'Arizona'},
	{id: 4, name: 'Arkansas'}, {id: 5, name: 'California'},
	{id: 6, name: 'Colorado'}, {id: 7, name: 'Connecticut'},
	{id: 8, name: 'Delaware'}, {id: 9, name: 'Florida'},
	{id: 10, name: 'Georgia'}, {id: 11, name: 'Hawaii'},
	{id: 12, name: 'Idaho'}, {id: 13, name: 'Illinois'},
	{id: 14, name: 'Indiana'}, {id: 15, name: 'Iowa'},
	{id: 16, name: 'Kansas'}, {id: 17, name: 'Kentucky'},
	{id: 18, name: 'Louisiana'}, {id: 19, name: 'Maine'},
	{id: 21, name: 'Maryland'}, {id: 22, name: 'Massachusetts'},
	{id: 23, name: 'Michigan'}, {id: 24, name: 'Minnesota'},
	{id: 25, name: 'Mississippi'}, {id: 26, name: 'Missouri'},
	{id: 27, name: 'Montana'}, {id: 28, name: 'Nebraska'},
	{id: 29, name: 'Nevada'}, {id: 30, name: 'New Hampshire'},
	{id: 31, name: 'New Jersey'}, {id: 32, name: 'New Mexico'},
	{id: 33, name: 'New York'}, {id: 34, name: 'North Dakota'},
	{id: 35, name: 'North Carolina'}, {id: 36, name: 'Ohio'},
	{id: 37, name: 'Oklahoma'}, {id: 38, name: 'Oregon'},
	{id: 39, name: 'Pennsylvania'}, {id: 40, name: 'Rhode Island'},
	{id: 41, name: 'South Carolina'}, {id: 42, name: 'South Dakota'},
	{id: 43, name: 'Tennessee'}, {id: 44, name: 'Texas'},
	{id: 45, name: 'Utah'}, {id: 46, name: 'Vermont'},
	{id: 47, name: 'Virginia'}, {id: 48, name: 'Washington'},
	{id: 49, name: 'West Virginia'}, {id: 50, name: 'Wisconsin'},
	{id: 51, name: 'Wyoming'}];

	private _cache:any;
	private _prevContext:any;

	public constructor() {
		this.random();
		this.randomStacked();
	}

	// Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}
	public addAlert():void {
		this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
	}

	// Dropdown
	public toggled(open:boolean):void {
		console.log('Dropdown is now: ', open);
	}

	public toggleDropdown($event:MouseEvent):void {
		$event.preventDefault();
		$event.stopPropagation();
		this.status.isopen = !this.status.isopen;
	}

	// Pagination
	public setPage(pageNo:number):void {
		this.currentPage = pageNo;
	};

	public pageChanged(event:any):void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
	};
	// Progressbar
	public random():void {
		let value = Math.floor((Math.random() * 100) + 1);
		let type:string;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		this.showWarning = (type === 'danger' || type === 'warning');
		this.dynamic = value;
		this.type = type;
	};

	public randomStacked():void {
		let types = ['success', 'info', 'warning', 'danger'];

		this.stacked = [];
		let total = 0;
		let n = Math.floor((Math.random() * 4) + 1);
		for (let i = 0; i < n; i++) {
			let index = Math.floor((Math.random() * 4));
			let value = Math.floor((Math.random() * 30) + 1);
			total += value;
			this.stacked.push({
				value: value,
	        max: value, // i !== (n - 1) ? value : 100,
	        type: types[index]
	    });
		}
	};
	// Rating
	public hoveringOver(value:number):void {
		this.overStar = value;
		this.percent = 100 * (value / this.max);
	};

	public resetStar():void {
		this.overStar = void 0;
	}
	// Tabs
	public alertMe():void {
		setTimeout(function ():void {
			alert('You\'ve selected the alert tab!');
		});
	};

	public setActiveTab(index:number):void {
		this.tabs[index].active = true;
	};

	public removeTabHandler(/*tab:any*/):void {
		console.log('Remove Tab handler');
	};

	// Typehead
	public getContext():any {
		return this;
	}

	public getAsyncData(context:any):Function {
		if (this._prevContext === context) {
			return this._cache;
		}

		this._prevContext = context;
		let f:Function = function ():Promise<string[]> {
			let p:Promise<string[]> = new Promise((resolve:Function) => {
				setTimeout(() => {
					let query = new RegExp(context.asyncSelected, 'ig');
					return resolve(context.states.filter((state:any) => {
						return query.test(state);
					}));
				}, 200);
			});
			return p;
		};
		this._cache = f;
		return this._cache;
	}

	public changeTypeaheadLoading(e:boolean):void {
		this.typeaheadLoading = e;
	}

	public changeTypeaheadNoResults(e:boolean):void {
		this.typeaheadNoResults = e;
	}

	public typeaheadOnSelect(e:any):void {
		console.log(`Selected value: ${e.item}`);
	}
}
