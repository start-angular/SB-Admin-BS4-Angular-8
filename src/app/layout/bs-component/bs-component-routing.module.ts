import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsComponentComponent } from './bs-component.component';

const routes: Routes = [
    {
        path: '',
        component: BsComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BsComponentRoutingModule {}
