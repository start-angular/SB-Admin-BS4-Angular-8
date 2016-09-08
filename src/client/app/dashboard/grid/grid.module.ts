import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';

@NgModule({
    imports: [RouterModule],
    declarations: [GridComponent],
    exports: [GridComponent]
})

export class GridModule { }
