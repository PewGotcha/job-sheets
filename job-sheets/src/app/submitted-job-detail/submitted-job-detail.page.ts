import { Component, OnInit } from '@angular/core';
import { jobInformation, locationInformation} from '../types';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-submitted-job-detail',
  templateUrl: './submitted-job-detail.page.html',
  styleUrls: ['./submitted-job-detail.page.scss'],
})
export class SubmittedJobDetailPage implements OnInit {


  taskList: any;
  jobInfo: jobInformation;
  title: string = "";
  completed: false = false;
  id: number = 0;
  contact: string = "";
  email: string = "";
location: string = "";

  constructor(
    private _angularFireStore: AngularFirestore
) {

    this.taskList =  _angularFireStore.collection("jobs").doc(this.getDocReference()).collection("tasks").valueChanges(); 
   }

  ngOnInit() {

    this.getJobInfo();


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
        this.jobInfo = response;
        this.title = response.title;
        this.id = response.id;
        let loc: number = response.location;
        this.getLocationInfo(loc);
      });
    
  }

   getLocationInfo(loc: number) {

      
     this._angularFireStore.doc('locations/' + loc)
      .snapshotChanges().pipe(
      map(snap => {
        if (snap.payload.exists) {
          const obj = snap.payload.data() as locationInformation;
          obj.id = +snap.payload.id;
          return obj;
        }
      }))
      .subscribe(response => {
        this.location = response.location;
        this.email = response.email;
        this.contact = response.contact;

      }); 
    
  } 

}
