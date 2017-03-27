import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule { }
