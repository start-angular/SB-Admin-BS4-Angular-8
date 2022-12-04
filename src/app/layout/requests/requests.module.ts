import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';

@NgModule({
    imports: [CommonModule, RequestsRoutingModule, PageHeaderModule],
    declarations: [RequestsComponent]
})
export class RequestsModule {}
