import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskFormPageRoutingModule } from './task-form-routing.module';

import { TaskFormPage } from './task-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    //, TaskFormPageRoutingModule --Removed as it was messing up the page
  ],
  entryComponents: [TaskFormPage],
  declarations: [TaskFormPage]
})
export class TaskFormPageModule {}
