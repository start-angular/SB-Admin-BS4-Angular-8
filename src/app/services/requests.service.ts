import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';
import * as Airtable from 'airtable';

@Injectable({
    providedIn: 'root',
})
export class RequestsService {
    private base: Airtable.Base;

    constructor(private http: HttpClient) {
        Airtable.configure({
            endpointUrl: '/api',
        });
        this.base = new Airtable({apiKey: 'XYZ'}).base('appomfnEuJTgyaOkD');
    }

    async createDocument(templateId: string, templateInputs: Object): Promise<any> {
        return lastValueFrom(
            this.http.post<any>('/api/v1/Requests', {
                ...templateInputs,
                templateId,
            })
        );
    }

    async getRequests(): Promise<any> {
        return this.base('Requests').select().firstPage();
    }
}
