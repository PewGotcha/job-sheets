import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmittedJobDetailPage } from './submitted-job-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SubmittedJobDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmittedJobDetailPageRoutingModule {}
