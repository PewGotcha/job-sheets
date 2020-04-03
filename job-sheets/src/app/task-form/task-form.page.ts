import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Time } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {

  title: String;
  note: String;
  myDate: Date;
  myTime: Time;
  constructor(private _modalController: ModalController) {

   }

  ngOnInit() {
  }

  closeModal(){

    this._modalController.dismiss();
  }
  submitTask(){

    console.log ("Date " + this.myDate);
    console.log ("Time " + this.myTime);
    console.log ("Title " + this.title);
    console.log ("Note Added " + this.note);
    console.log("Task Submitted");
    this._modalController.dismiss();
    

  }
}
