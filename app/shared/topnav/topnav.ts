import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
    encapsulation: ViewEncapsulation.None,
    directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class TopNavComponent {}
