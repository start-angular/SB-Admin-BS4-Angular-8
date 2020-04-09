import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatComponent } from './stat.component';

@NgModule({
    imports: [CommonModule],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}
