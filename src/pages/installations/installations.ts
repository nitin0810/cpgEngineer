import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstallationService } from '../../providers/installation.service';
import { CustomService } from '../../providers/custom.service';
import { Installation } from '../../Classes/Models/product.model';


@IonicPage()
@Component({
  selector: 'page-installations',
  templateUrl: 'installations.html',
})
export class InstallationsPage {

  installations:Array<Installation>;
currentPage=1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private installationService: InstallationService,
    private customService: CustomService
  ) {
  }

  ionViewDidLoad() {
    this.getInstallationList();
  }

  getInstallationList(refresher?: any) {

    if (!refresher) { this.customService.showLoader(); }
    this.installationService.getInstallations(1)
      .subscribe((res: Array<Installation>) => {

        this.installations= res;
        this.currentPage = 1;
        refresher ? refresher.complete() : this.customService.hideLoader();
      }, (err: any) => {

        refresher ? refresher.complete() : this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }


  doRefresh(refresher) {

    this.getInstallationList(refresher);
  }

  doInfinite(infinite) {

    this.installationService.getInstallations(this.currentPage + 1)
      .subscribe((res: Array<any>) => {
        if (res.length) {
          this.currentPage++;
          this.installations = this.installations.concat(res);
        }
        infinite.complete();
      }, (err: any) => {

        infinite.complete();
        this.customService.showToast(err.msg);
      });
  }


  openInstallationPage(ins: Installation) {
    this.navCtrl.push('InstallationPage', { 'installation': ins });
  }

  // onSort() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: 'Sort By',
  //     buttons: [
  //       {
  //         text: this.selectedSegment === 'fixed' ? 'Date & Time' : 'Distance',
  //         handler: () => {
  //           /** this event is being listened in complaint.ts, 1st parameter is for sort, 2nd is for filter*/
  //           // this.onSelect.emit({ sortName: 'title', filter: null });
  //         }
  //       },
  //       {
  //         text: this.selectedSegment === 'fixed' ? 'Time to Install' : 'Average Time',
  //         handler: () => {
  //           //show further options of complaintCatgories
  //           // this.onSelect.emit({ sortName: 'category', filter: null });

  //         }
  //       },
  //       {
  //         text: 'Category',
  //         handler: () => {
  //           // this.onSelect.emit({ sortName: 'status', filter: null });

  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }



}
