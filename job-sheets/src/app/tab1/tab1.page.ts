import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  realJobList: Observable<any>;

  constructor(private _angularFireStore: AngularFirestore) {
    this.realJobList =  _angularFireStore.collection("jobs").valueChanges();

  }

}
