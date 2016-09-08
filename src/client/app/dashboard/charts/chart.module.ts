import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartComponent } from './chart.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})

export class ChartModule { }
