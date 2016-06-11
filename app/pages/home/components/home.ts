import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES, DROPDOWN_DIRECTIVES, AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html',
	directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html',
	styleUrls: ['home.css'],
})
class NotificationComponent { }


@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.html',
	styleUrls: ['home.css'],
	directives: [
		AlertComponent,
		TimelineComponent,
		ChatComponent,
		NotificationComponent,
		CAROUSEL_DIRECTIVES,
		CORE_DIRECTIVES,
		FORM_DIRECTIVES ]
})

export class HomeComponent {

	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];
	/* END */
	/* Alert component */
	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/

	constructor() {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */
}
