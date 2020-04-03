import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittedJobDetailPageRoutingModule } from './submitted-job-detail-routing.module';

import { SubmittedJobDetailPage } from './submitted-job-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittedJobDetailPageRoutingModule
  ],
  declarations: [SubmittedJobDetailPage]
})
export class SubmittedJobDetailPageModule {}
