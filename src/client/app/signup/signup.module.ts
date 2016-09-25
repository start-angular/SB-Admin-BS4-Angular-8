import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignupModule { }
