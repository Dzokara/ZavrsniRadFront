import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './admin-layout/components/footer/footer.component';
import { HeaderComponent } from './admin-layout/components/header/header.component';
import { SidebarComponent } from './admin-layout/components/sidebar/sidebar.component';
import { AdminLayoutComponent } from './admin-layout/components/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/home/home.component';
import { JobSelectComponent } from './components/jobs/job-select/job-select.component';
import { JobInsertComponent } from './components/jobs/job-insert/job-insert.component';
import { JobUpdateComponent } from './components/jobs/job-update/job-update.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BlogsInsertComponent } from './components/blogs/blogs-insert/blogs-insert.component';
import { BlogsUpdateComponent } from './components/blogs/blogs-update/blogs-update.component';
import { BlogsSelectComponent } from './components/blogs/blogs-select/blogs-select.component';
import { UsersSelectComponent } from './components/users-select/users-select.component';



@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    JobSelectComponent,
    JobInsertComponent,
    JobUpdateComponent,
    BlogsInsertComponent,
    BlogsUpdateComponent,
    BlogsSelectComponent,
    UsersSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class AdminModule { }
