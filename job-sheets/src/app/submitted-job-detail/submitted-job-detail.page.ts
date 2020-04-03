import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jobs} from '../types';
import {JobsService} from '../jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submitted-job-detail',
  templateUrl: './submitted-job-detail.page.html',
  styleUrls: ['./submitted-job-detail.page.scss'],
})
export class SubmittedJobDetailPage implements OnInit {

  jobDetail: Observable<Jobs>;

  constructor(
    jobsService: JobsService, 
    activatedRoute: ActivatedRoute) {

    const jobID = activatedRoute.snapshot.params["jobID"];
    this.jobDetail = jobsService.getJob(jobID);
   }

  ngOnInit() {
  }

}
