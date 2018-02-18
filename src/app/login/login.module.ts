import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {}
