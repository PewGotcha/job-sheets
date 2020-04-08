import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Time } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {

  title: String;
  noteInput: String;
  myDate: Date;
  myTime: Time;
  constructor(
    private _modalController: ModalController,
    private _angularFireStore: AngularFirestore
    ) {   }

  ngOnInit() {
  }

  closeModal(){

    this._modalController.dismiss();
  }
  submitTask(){
 let ref =  this.getDocReference();
 let form = ["date:" + this.myDate, "time: " + this.myTime, "title: " + this.title]
    this._angularFireStore.collection("jobs").doc(ref).collection("tasks").add({

      timestamp: new Date(),
      title: this.title,
      date: this.myDate,
      time: this.myTime,
      notes: this.noteInput,
      user: "User"
    })

    console.log ("Date " + this.myDate);
    console.log ("Time " + this.myTime);
    console.log ("Title " + this.title);
    console.log ("Note Added " + this.noteInput);
    console.log("Task Submitted");
    this._modalController.dismiss();
  }
  getDocReference(){

    let url = window.location.href + "";
    let parts = url.split("/");
    let result = parts[parts.length - 1];
    return result;
  }
  
}
