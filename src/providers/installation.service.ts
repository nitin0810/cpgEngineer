
import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { BASEURL } from './app.constants';
import { Incident } from '../Classes/Models/incident.model';
import { map } from 'rxjs/operator/map';

@Injectable()
export class InstallationService {


    constructor(
        private http: CustomHttpService,
    ) { }


    getInstallations(pageNo) {
        return this.http.get(`/se/installation/page/${pageNo}`);
    }


    updateIncidentWithoutImg(updateInfo: any, incidentId: number) {
        let fd = new FormData();
        for (const key in updateInfo) {
            fd.append(key, updateInfo[key]);
        }

        return this.http.put(`/se/installation/${incidentId}`, fd);
    }

    getHistory(id: number) {
        return this.http.get(`/se/installation/${id}/history`);
    }

    getContact(id: number) {
        return this.http.get(`/se/installation/${id}/customer-address`);
    }

}

