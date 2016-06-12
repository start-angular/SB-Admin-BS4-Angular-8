import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {LoginComponent} from '../../pages/login/components/login';
import {SignupComponent} from '../../pages/signup/components/signup';
import {DashboardComponent} from '../dashboard/components/dashboard';

@Component({
	moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent }
])

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
	}
}
