import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BSElementComponent } from './bsElement.component';

@NgModule({
    imports: [RouterModule],
    declarations: [BSElementComponent],
    exports: [BSElementComponent]
})

export class BSElementModule { }
