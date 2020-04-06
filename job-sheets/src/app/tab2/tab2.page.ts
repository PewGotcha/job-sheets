import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  realJobList: Observable<any>;

  constructor(private _angularFireStore: AngularFirestore) {
    this.realJobList =  _angularFireStore.collection("jobs").valueChanges();

  }

}
