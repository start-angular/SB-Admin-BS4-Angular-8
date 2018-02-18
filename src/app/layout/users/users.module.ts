import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule],
    declarations: [UsersComponent]
})
export class UsersModule {}
