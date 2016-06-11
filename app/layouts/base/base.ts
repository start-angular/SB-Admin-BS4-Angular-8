import {Component, ViewEncapsulation} from '@angular/core';
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

export class AppComponent { }
