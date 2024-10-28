import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './jobs.component';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class JobsModule { }
