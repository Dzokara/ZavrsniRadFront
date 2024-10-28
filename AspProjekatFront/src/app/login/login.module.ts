import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ]
})
export class LoginModule { }
