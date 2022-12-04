import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
    animations: [routerTransition()],
    providers: [RequestsService],
})
export class RequestsComponent implements OnInit {
    constructor(public requestsService: RequestsService) { }

    async ngOnInit() {
        const requests = await this.requestsService.getRequests();
        console.log(requests);
    }
}
