import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }
