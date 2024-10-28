import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBlogComponent } from './single-blog.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SingleBlogModule { }
