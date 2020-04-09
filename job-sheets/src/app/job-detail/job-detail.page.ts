import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs, jobInformation } from '../types';
import { JobsService } from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TaskFormPage } from '../task-form/task-form.page';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NumberValueAccessor } from '@angular/forms';
import{ take } from 'rxjs/operators'
import { map } from "rxjs/operators";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

  jobDetail: Observable<Jobs>;
  jobID: string;
  taskList: any;
  jobInfo: jobInformation;
  title: string = "";
  completed: false = false;
  id: number = 0;
  location: number = 0;
  

  
   constructor(
    private _angularFireStore: AngularFirestore,
    private _modalController: ModalController,
    private _angularFireAuth: AngularFireAuth,
    jobsService: JobsService,
    activatedRoute: ActivatedRoute) {

    const jobID = activatedRoute.snapshot.params["jobID"];
    this.jobDetail = jobsService.getJob(jobID);
    this.taskList =  _angularFireStore.collection("jobs").doc(jobID).collection("tasks").valueChanges(); 
      }

   
  ngOnInit() {
    this.getJobInfo();
    console.log("Job Info object", this.jobInfo);
  

  }
  
  async openModal() {
    const taskModal = await this._modalController.create({
      component: TaskFormPage
    });
    return await taskModal.present();
    
    
  }
  
  submit(){
    let item = this._angularFireStore.collection("jobs").doc(this.getDocReference() + "");
    console.log("refID " + item);
    item.update({ completed: true });
    setTimeout(() => { window.location.assign("../tabs/tab1"); }, 2000); 
        
    }
 
    getDocReference(){

      let url = window.location.href + "";
      let parts = url.split("/");
      let result = parts[parts.length - 1];
      return result;

    }


    getJobInfo() {
      this._angularFireStore.doc('jobs/'+this.getDocReference())
        .snapshotChanges().pipe(
        map(snap => {
          if (snap.payload.exists) {
            const obj = snap.payload.data() as jobInformation;
            obj.id = +snap.payload.id;
            return obj;
          }
        }))
        .subscribe(response => {
          console.log(response);
          this.jobInfo = response;
          this.title = response.title;
          this.id = response.id;
          this.location = response.location;
        });
      
    }

   /*  getLocationInfo() {
      this._angularFireStore.doc('jobs/'+this.getDocReference())
        .snapshotChanges().pipe(
        map(snap => {
          if (snap.payload.exists) {
            const obj = snap.payload.data() as jobInformation;
            obj.id = +snap.payload.id;
            return obj;
          }
        }))
        .subscribe(response => {
          console.log(response);
          this.jobInfo = response;
          this.title = response.title;
          this.id = response.id;
          this.location = response.location;
        });
      
    } */

}


 



