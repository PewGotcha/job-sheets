import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../types';
import { JobsService } from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TaskFormPage } from '../task-form/task-form.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


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
    private _angularFireAuth: AngularFireAuth,
    jobsService: JobsService,
    activatedRoute: ActivatedRoute) {

    const jobID = activatedRoute.snapshot.params["jobID"];
    this.jobDetail = jobsService.getJob(jobID);
  }


  ngOnInit() {
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

  submit() {
    this.jobDetail.subscribe(
      (selectedJob) => {
        this._angularFireStore
          .collection("completed", (ref) => {
            return ref.where("id", "==", selectedJob.id)
          })
          .get()
          .subscribe((doc) => {
            if (doc.empty) {
              this._angularFireStore
                .collection("completed")
                .add(selectedJob)

            }
          })
      }
    );
  }
}