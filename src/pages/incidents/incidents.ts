import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { IncidentService } from '../../providers/incidents.service';
import { Incident } from '../../Classes/Models/incident.model';
import { CustomService } from '../../providers/custom.service';



@IonicPage()
@Component({
  selector: 'page-ncidents',
  templateUrl: 'incidents.html',
})
export class IncidentsPage {

  selectedSegment = 'assigned'; // possible values are: assigned, scheduled, fixed, not fixed
  shownIncidents: Array<Incident>;// contains incidents of selected segment
  incidents: { [key: string]: Array<Incident> } = {
    all: [],
    assigned: [],
    scheduled: [],
    fixed: [],
    notFixed: []
  };


  currentPage = 1; // for pagination

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private incidentService: IncidentService,
    private actionSheetCtrl: ActionSheetController,
    private customService: CustomService
  ) {
  }

  ionViewDidLoad() {
    this.getIncidentList();
  }

  getIncidentList(refresher?: any) {

    if (!refresher) { this.customService.showLoader(); }
    this.incidentService.getIncidents(1)
      .subscribe((res: Array<Incident>) => {

        this.incidents.all = res;
        this.groupIncidents(res);
        this.setIntialShownIncidents();
        this.currentPage = 1;
        refresher ? refresher.complete() : this.customService.hideLoader();
      }, (err: any) => {

        refresher ? refresher.complete() : this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  setIntialShownIncidents(){
    this.shownIncidents =  this.incidents[this.selectedSegment];
  }

  onSegmentChange(value: string) {

    this.selectedSegment = value;
    switch (this.selectedSegment) {
      case 'assigned': this.shownIncidents = this.incidents.assigned;
        break;
      case 'scheduled': this.shownIncidents = this.incidents.scheduled;
        break;
      case 'fixed': this.shownIncidents = this.incidents.fixed;
        break;
      case 'notFixed': this.shownIncidents = this.incidents.notFixed;
        break;
    }

  }

  groupIncidents(list: Array<Incident>) {
    this.incidents.assigned = [];
    this.incidents.scheduled = [];
    this.incidents.fixed = [];
    this.incidents.notFixed = [];

    list.forEach(inc => {

      switch (inc.statusName) {
        case 'Assigned Service Engineer':
          this.incidents.assigned.push(inc);
          break;
        case 'Schedule':
          this.incidents.scheduled.push(inc);
          break;
        case 'Fixed':
          this.incidents.fixed.push(inc);
          break;
        case 'Not Fixed':
          this.incidents.notFixed.push(inc);
          break;
      }
    });

  }

  doRefresh(refresher) {

    this.getIncidentList(refresher);
  }

  doInfinite(infinite) {

    this.incidentService.getIncidents(this.currentPage + 1)
      .subscribe((res: Array<any>) => {
        if (res.length) {
          this.currentPage++;
          this.incidents.all = this.incidents.all.concat(res);
          this.groupIncidents(this.incidents.all);
        }
        infinite.complete();
      }, (err: any) => {

        infinite.complete();
        this.customService.showToast(err.msg);
      });
  }


  openIncidentPage(inc:Incident) {
    this.navCtrl.push('IncidentPage', { 'incident': inc });
  }

  onSort() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Sort By',
      buttons: [
        {
          text: this.selectedSegment === 'fixed' ? 'Date & Time' : 'Distance',
          handler: () => {
            /** this event is being listened in complaint.ts, 1st parameter is for sort, 2nd is for filter*/
            // this.onSelect.emit({ sortName: 'title', filter: null });
          }
        },
        {
          text: this.selectedSegment === 'fixed' ? 'Time to Install' : 'Average Time',
          handler: () => {
            //show further options of complaintCatgories
            // this.onSelect.emit({ sortName: 'category', filter: null });

          }
        },
        {
          text: 'Category',
          handler: () => {
            // this.onSelect.emit({ sortName: 'status', filter: null });

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    actionSheet.present();
  }

}
