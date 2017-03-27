import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        BsComponentRoutingModule
    ],
    declarations: [BsComponentComponent]
})
export class BsComponentModule { }
