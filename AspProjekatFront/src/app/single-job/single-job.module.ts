import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleJobComponent } from './single-job.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SingleJobComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SingleJobModule { }
