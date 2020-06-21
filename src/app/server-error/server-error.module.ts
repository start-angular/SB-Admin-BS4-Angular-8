import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
    imports: [CommonModule, ServerErrorRoutingModule],
    declarations: [ServerErrorComponent]
})
export class ServerErrorModule {}
