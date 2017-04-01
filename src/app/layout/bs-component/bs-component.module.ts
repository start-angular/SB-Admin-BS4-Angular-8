import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent
} from './components';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        BsComponentRoutingModule
    ],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class BsComponentModule { }
