import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Jobs} from '../types';
import {JobsService} from '../jobs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  jobList: Observable<Jobs[]>;

  constructor(jobService: JobsService) {

    setTimeout(()=> {

      this.jobList = jobService.activeJobs();
    }, 3000);
 

  }

}
