import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BsElementComponent } from './bs-element.component';

const routes: Routes = [
    { path: '', component: BsElementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsElementRoutingModule { }
