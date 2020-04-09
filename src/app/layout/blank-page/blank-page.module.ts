import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
