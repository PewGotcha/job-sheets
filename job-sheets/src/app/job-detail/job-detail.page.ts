import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../types';
import { JobsService } from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TaskFormPage } from '../task-form/task-form.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {

  jobDetail: Observable<Jobs>;
  jobID: string;
  taskList: any;
  //jobsList = [];
   constructor(
    private _angularFireStore: AngularFirestore,
    private _modalController: ModalController,
    private _angularFireAuth: AngularFireAuth,
    jobsService: JobsService,
    activatedRoute: ActivatedRoute) {

    const jobID = activatedRoute.snapshot.params["jobID"];
    this.jobDetail = jobsService.getJob(jobID);
    this.taskList =  _angularFireStore.collection("jobs").doc(jobID).collection("tasks").valueChanges(); //amend this "1" so its pulling the right data
    let jobsList = [];
  }

   
  ngOnInit() {
//pull data from the firestore, put it into an array so we can reference it
/* this._angularFireStore.collection('jobs').snapshotChanges().subscribe(jobsList => {
  this.jobsList = [];
  jobsList.forEach(a => {
    let realJobDetails: any = a.payload.doc.data();
    realJobDetails.uid = a.payload.doc.id;
    this.jobsList.push(realJobDetails); 
  }
  )
}
)  */

  }
  
  async openModal() {
    const taskModal = await this._modalController.create({
      component: TaskFormPage
    });
    return await taskModal.present();
    
    
  }
  addNewTask() {
    console.log("Add button pressed")
  }

/*   submit() {

    //Updated the collection with a new submitted document
     this.jobDetail.subscribe(
      (selectedJob) => {
        this._angularFireStore
          .collection("jobs", (ref) => {
            return ref.where("id", "==", selectedJob.id)
          })
          .get()
          .subscribe((doc) => {
            if (doc.empty) {
              this._angularFireStore
                .collection("jobs")
                .add(selectedJob)

            }
          })
      }
    ); 

  }

  submit2() {

    //Updated the field in a certain record
    console.log(this.jobID);
    console.log(this.jobID + "")
   let referenceID = this.jobID + "";
   console.log("reference ID : " + referenceID)
     this.jobDetail.subscribe(


      
      (thisOnes) => {
        this._angularFireStore
          .collection("jobs", (ref) => {
            return ref.where("id", "==", thisOnes.id)
          })
          .get()
          .subscribe((doc) => {
           
            this._angularFireStore.collection("jobs").doc(referenceID).update({ completed: "true" });

          
          })
          console.log("job ran")
      }
    ); 

  } */


  
  submit3(){
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

/*  test(){

    let referenceID = this._angularFireStore.collection("jobs").doc((selectedJob) => {(ref) => { return ref.where("id", "==", selectedJob.DocumentID)}});

  } */

}


 



