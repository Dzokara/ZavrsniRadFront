import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BlogModule { }
