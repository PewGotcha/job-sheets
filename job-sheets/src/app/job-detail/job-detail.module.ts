import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobDetailPageRoutingModule } from './job-detail-routing.module';

import { JobDetailPage } from './job-detail.page';
import { TaskFormPageModule } from '../task-form/task-form.module';

@NgModule({
  imports: [
    TaskFormPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    JobDetailPageRoutingModule
  ],
  declarations: [JobDetailPage]
})
export class JobDetailPageModule {}
