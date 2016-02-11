import {Component} from 'angular2/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES} from 'angular2/common';
import { DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'timeline',
  templateUrl: './pages/home/components/timeline.html',
  styleUrls: ['./pages/home/components/timeline.css'],
  directives: [CORE_DIRECTIVES]
})
class TimelineCmp {}

@Component({
  selector: 'chat',
  templateUrl: './pages/home/components/chat.html',
  directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
class ChatCmp {
	status: { isopen: boolean } = { isopen: false };
}

@Component({
  selector: 'notifications',
  templateUrl: './pages/home/components/notifications.html',
  directives: [CORE_DIRECTIVES]
})
class NotificationCmp {}


@Component({
  selector: 'home',
  templateUrl: './pages/home/components/home.html',
  styleUrls: ['./pages/home/components/home.css'],
  directives: [Alert, TimelineCmp, ChatCmp, NotificationCmp]
})

export class HomeCmp {

	alerts: Array<Object> = [
		{
			type: 'info',
			msg: 'Well done! You successfully read this important alert message.',
			closable: true
		}
	];

	closeAlert(i: number) {
		this.alerts.splice(i, 1);
	}

	addAlert() {
		this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
	}
}
