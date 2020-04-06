import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs';
import {Jobs} from './types';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _httpClient: HttpClient) { }

  getJob(jobID: string): Observable<Jobs>{
    return this._httpClient.get<Jobs>(API + "/" + jobID);

  }

  activeJobs(): Observable<Jobs[]>{
    return this._httpClient.get<Jobs[]>(API);


  }

  submittedJobs(): Observable<Jobs[]>{
    return this._httpClient.get<Jobs[]>(API);


  }

  allJobs(): Observable<Jobs[]>{
    return this._httpClient.get<Jobs[]>(API);

  }
  
    
}

const API ="https://jsonplaceholder.typicode.com/todos";