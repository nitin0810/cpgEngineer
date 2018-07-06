import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleIncidentPage } from './schedule-incident';

@NgModule({
  declarations: [
    ScheduleIncidentPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleIncidentPage),
  ],
})
export class ScheduleIncidentPageModule {}
