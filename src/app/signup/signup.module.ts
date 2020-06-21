import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    imports: [CommonModule, TranslateModule, SignupRoutingModule],
    declarations: [SignupComponent]
})
export class SignupModule {}
