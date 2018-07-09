import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { IncidentService } from '../../providers/incidents.service';
import { CustomService } from '../../providers/custom.service';
import { Incident } from '../../Classes/Models/incident.model';



@IonicPage()
@Component({
  selector: 'page-incident',
  templateUrl: 'incident.html',
})

export class IncidentPage {

  title = '';
  incident: Incident;
  contactInfo:any;
    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private incidentService: IncidentService,
    private customService: CustomService,
    private alertCtrl: AlertController
  ) {
    this.incident = this.navParams.get('incident');
    this.title = this.incident.productName;
    
  }

  ionViewDidLoad() {
    // this.getIncident();
  }

  onSchedule(isReScheduled: boolean) {
    const clbk = (updatedIncident: Incident) => {
      if (updatedIncident) {
        this.incident.lastScheduleDate = updatedIncident.lastScheduleDate;
        this.updateStatusInfo(updatedIncident);

      }
    };
    this.navCtrl.push('ScheduleIncidentPage', { 'incidentId': this.incident.id, 'isReScheduled': isReScheduled, 'callback': clbk, 'lastScheduleDate': this.incident.lastScheduleDate });
  }

  onFixed() {
    const clbk = (updatedIncident: Incident) => {
      if (updatedIncident) {
        this.updateStatusInfo(updatedIncident);
      }
    };
    this.navCtrl.push('FixIncidentPage', { 'incidentId': this.incident.id,'clbk': clbk });


  }
  onNotFixed() {
    const alert: Alert = this.alertCtrl.create({
      title: 'Not Fixed',
      subTitle: 'Please specify reason',
      inputs: [{ type: 'text', }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Submit',
        handler: (data) => {

          if (data[0].trim() == '') {
            this.customService.showToast('Reason can not be empty');
            return false;
          } else {
            this.reschedule(data[0]);
          }

        }     
      }]
    });
    alert.present();      
  }

  reschedule(comment: string) {
    const payLoad = {
      comment,
      updateInfo: 'notFixed'
    };

    this.customService.showLoader();
    this.incidentService.updateIncidentWithoutImg(payLoad, this.incident.id)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.customService.showToast('Status updated successfully');
        this.updateStatusInfo(res);
        // this.navCtrl.pop();
      }, (err: any) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  updateStatusInfo(updatedIncident: any) {
    this.incident.statusColor = updatedIncident.statusColor;
    this.incident.statusId = updatedIncident.statusId;
    this.incident.statusName = updatedIncident.statusName;
  }

  onContact(){
    this.customService.showLoader();
    this.incidentService.getContact( this.incident.id)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.contactInfo = res;
      }, (err: any) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }
     
  onHistory(){
    this.customService.showLoader();
    this.incidentService.getHistory( this.incident.id)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.navCtrl.push("HistoryPage",{'history':res});
      }, (err: any) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }


}
