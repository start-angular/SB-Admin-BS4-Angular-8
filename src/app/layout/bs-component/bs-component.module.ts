import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';

@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule
    ],
    declarations: [BsComponentComponent]
})
export class BsComponentModule { }
