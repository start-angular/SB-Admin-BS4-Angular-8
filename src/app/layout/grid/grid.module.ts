import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule],
    declarations: [GridComponent]
})
export class GridModule {}
