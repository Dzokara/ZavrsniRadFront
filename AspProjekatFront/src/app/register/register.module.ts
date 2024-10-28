import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ]
})
export class RegisterModule { }
