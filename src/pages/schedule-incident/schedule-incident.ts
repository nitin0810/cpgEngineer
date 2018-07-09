import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { IncidentService } from '../../providers/incidents.service';


@IonicPage()
@Component({
  selector: 'page-schedule-incident',
  templateUrl: 'schedule-incident.html',
})
export class ScheduleIncidentPage {

  title = '';
  incidentId: number;
  reschedule: boolean;
  // for showing initial values
  currentDate:'';
  currentTime:'';
  callback: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private customService: CustomService,
    private incidentService: IncidentService
  ) {
    this.reschedule = this.navParams.get('isReScheduled');
    this.title = this.reschedule ? 'Reschedule' : 'Schedule';
    this.incidentId = this.navParams.get('incidentId');
    this.callback = this.navParams.get('callback');
    if(this.navParams.get('lastScheduleDate')){

      [this.currentDate,this.currentTime] = this.navParams.get('lastScheduleDate').split('T');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleIncidentPage');
  }

  onChangeTime({ comment, date, time }) {
    console.log(comment, date, time);
// Time format of time variable depends on format of inital value provided to ion-datetime(if there is any)
// We need time in HH:MM:SS
// if line 33 executes, time output is in HH:MM:SS, otherwise is in HH:MM
// hence we have to handle this case
    const info = {
      comment,
      scheduleDate: this.navParams.get('lastScheduleDate')?`${date}T${time}`:`${date}T${time}:00`,
      updateInfo: this.reschedule ? 'reschedule' : 'schedule'
    };

    this.updateIncident(info);
  }

  updateIncident(info: any) {
    this.customService.showLoader();
    this.incidentService.updateIncidentWithoutImg(info, this.incidentId)
      .subscribe((res: any) => {
        if (this.callback) { this.callback(res); }
        this.customService.hideLoader();
        this.customService.showToast('Status updated successfully');
        this.navCtrl.pop();
      }, (err: any) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

}
