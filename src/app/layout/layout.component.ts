import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(public router: Router) { }
    ngOnInit() {
        this.router.navigate(['/dashboard']);
    }
}
