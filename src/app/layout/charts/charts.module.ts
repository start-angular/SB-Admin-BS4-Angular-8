import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule  as Ng2Charts } from 'ng2-charts';

import { PageHeaderModule } from '../../shared';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
