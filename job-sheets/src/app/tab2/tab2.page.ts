import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Jobs} from '../types';
import {JobsService} from '../jobs.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  jobList: Observable<Jobs[]>;

  constructor(jobService: JobsService) {
    this.jobList = jobService.submittedJobs();

  }

}
