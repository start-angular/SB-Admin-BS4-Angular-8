import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../shared';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';

@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule, NgbModule],
    declarations: [BsElementComponent]
})
export class BsElementModule {}
