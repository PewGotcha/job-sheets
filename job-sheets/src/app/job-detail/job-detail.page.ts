import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jobs} from '../types';
import {JobsService} from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TaskFormPage } from '../task-form/task-form.page';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

  jobDetail: Observable<Jobs>;
  jobID: string;

  constructor(
    private _angularFireStore: AngularFirestore,
    private _modalController: ModalController,
    jobsService: JobsService, 
    activatedRoute: ActivatedRoute) {

    const jobID = activatedRoute.snapshot.params["jobID"];
    this.jobDetail = jobsService.getJob(jobID);
   }


  ngOnInit() {
  }
  async openModal(){
    const taskModal = await this._modalController.create({
      component: TaskFormPage});
      return await taskModal.present();
  }
  addNewTask(){
    console.log("Add button pressed")
  }
  /*
  async openModal(){
    const taskModal = await this._modalController.create({
    component: TaskFormPage});

    return await taskModal.present();
  }
*/
/* 
submitTwo(){
  this.jobDetail.subscribe(
    (job)=> {
      this._angularFireStore
        .collection("submitted")
        .doc(this.jobID)
        .collection("job details").get().subscribe(()=> {
              this._angularFireStore
              .collection("submitted")
              .doc(this.jobID)
               .collection("job details")
               .add(job)

            
          })
    }
   );
}

submitThree(){
  this.jobDetail.subscribe(
    (job)=> {
      this._angularFireStore
        .collection("submitted")
        .doc(this.jobID)
        .collection("job details").get().subscribe(()=> {
              this._angularFireStore
              .collection("submitted")
              .doc(this.jobID)
               .collection("job details")
               .add(job)
 
            
          })
    }
  );
}

*/

}