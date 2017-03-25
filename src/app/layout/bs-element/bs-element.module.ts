import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';

@NgModule({
  imports: [
    CommonModule,
    BsElementRoutingModule
  ],
  declarations: [BsElementComponent]
})
export class BsElementModule { }
