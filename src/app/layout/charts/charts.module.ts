import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [
        CommonModule,
        Charts,
        ChartsRoutingModule
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule { }
