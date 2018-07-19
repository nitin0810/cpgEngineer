import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Installation } from '../../Classes/Models/product.model';
import { InstallationService } from '../../providers/installation.service';
import { CustomService } from '../../providers/custom.service';

@IonicPage()
@Component({
  selector: 'page-installation',
  templateUrl: 'installation.html',
})
export class InstallationPage {

  installation:Installation;
  contactInfo:any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private installationService:InstallationService,
    private customService:CustomService,
    private alertCtrl:AlertController
  ) {
    this.installation= this.navParams.get('installation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstallationPage');
  }

  onSchedule(isReScheduled: boolean) {
    
    const clbk = (updatedIncident: Installation) => {
      if (updatedIncident) {
        this.installation.lastScheduleDate = updatedIncident.lastScheduleDate;
        this.updateStatusInfo(updatedIncident);

      }
    };
    this.navCtrl.push('ScheduleIncidentPage', { 'incidentId': this.installation.id, 'isReScheduled': isReScheduled, 'callback': clbk, 'lastScheduleDate': this.installation.lastScheduleDate,'installing':true});
  }

  onInstalled() {
    const clbk = (updatedIncident: Installation) => {
      if (updatedIncident) {
        this.installation.signatureUrl = updatedIncident.signatureUrl;
        this.updateStatusInfo(updatedIncident);
      }
    };
    this.navCtrl.push('FixIncidentPage', { 'incidentId': this.installation.id,'clbk': clbk,'installing':true});


  }
  
  updateStatusInfo(updatedIncident: any) {
    this.installation.statusColor = updatedIncident.statusColor;
    this.installation.statusId = updatedIncident.statusId;
    this.installation.statusName = updatedIncident.statusName;
  }

  onContact(){
    this.customService.showLoader();
    this.installationService.getContact( this.installation.id)
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
    this.installationService.getHistory( this.installation.id)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.navCtrl.push("HistoryPage",{'history':res});
      }, (err: any) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  giveWarranty(endDate: string | null) {

    // if endDate is null
    if (!endDate) { return 'N.A' }

    const ed = new Date(endDate);
    ed.setHours(0);
    ed.setMinutes(0);
    ed.setSeconds(0);
    ed.setMilliseconds(0);

    const today = new Date();
    if (today < ed) {
      return `Expires on ${ed.toLocaleDateString()}`;
    } else {
      return 'Expired';
    }
  }

}
