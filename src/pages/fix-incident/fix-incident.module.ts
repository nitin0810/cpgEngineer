import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FixIncidentPage } from './fix-incident';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    FixIncidentPage,
  ],
  imports: [
    IonicPageModule.forChild(FixIncidentPage),
    SignaturePadModule
  ],
})
export class FixIncidentPageModule {}
