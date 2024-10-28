import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsAddComponent } from './jobs-add/jobs-add.component';
import { RegisterComponent } from './register/register.component';
import { SingleJobComponent } from './single-job/single-job.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { AdminLayoutComponent } from './admin/admin-layout/components/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin/components/home/home.component';
import { JobSelectComponent } from './admin/components/jobs/job-select/job-select.component';
import { JobInsertComponent } from './admin/components/jobs/job-insert/job-insert.component';
import { JobUpdateComponent } from './admin/components/jobs/job-update/job-update.component';
import { BlogsSelectComponent } from './admin/components/blogs/blogs-select/blogs-select.component';
import { BlogsInsertComponent } from './admin/components/blogs/blogs-insert/blogs-insert.component';
import { BlogsUpdateComponent } from './admin/components/blogs/blogs-update/blogs-update.component';
import { UsersSelectComponent } from './admin/components/users-select/users-select.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'services',
        component:ServicesComponent
      },
      {
        path:'jobs',
        component:JobsComponent
      },
      {
        path:'jobsAdd',
        component:JobsAddComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'jobs/:id',
        component:SingleJobComponent
      },
      {
        path:'blog/:id',
        component:SingleBlogComponent
      }
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path:'admin',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path:'home',
        component:AdminHomeComponent
      },
      {
        path:'jobs',
        component:JobSelectComponent
      },
      {
        path:'insertJob',
        component:JobInsertComponent
      },
      {
        path:'jobs/:id',
        component:JobUpdateComponent
      },
      {
        path:'blogs',
        component:BlogsSelectComponent
      },
      {
        path:'insertBlog',
        component:BlogsInsertComponent
      },
      {
        path:'blogs/:id',
        component:BlogsUpdateComponent
      },
      {
        path:'users',
        component:UsersSelectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
