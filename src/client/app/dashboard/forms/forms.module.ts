import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormComponent } from './forms.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [FormComponent],
    exports: [FormComponent]
})

export class FormModule { }
