import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ModalComponent } from '../bs-component/components/modal/modal.component';

@Component({
    selector: 'app-restaurants',
    providers: [ModalComponent],
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
    animations: [routerTransition()]
})
export class RestaurantsComponent implements OnInit {
    private restaurants = [];
    private markedForDeletion = [];
    constructor(private modal: ModalComponent) {}

    public markForDeletion(items) {
        if (this.markedForDeletion.indexOf(items) > -1) {
            this.markedForDeletion.splice(this.markedForDeletion.indexOf(items), 1);
        } else {
            this.markedForDeletion.push(items);
        }
    }

    ngOnInit() {
        this.restaurants.push({
            id: 2,
            name: 'Maestro',
            status: false
        }, {
            id: 3,
            name: 'Kings',
            status: false
        }, {
            id: 1,
            name: 'Sultan',
            status: false
        });
    }

    confirm(content: any): void {
        this.modal.open(content);
    }
    delete(event): void {
        console.log(event);
    }

}
