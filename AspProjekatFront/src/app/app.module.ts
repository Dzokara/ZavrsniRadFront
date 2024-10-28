import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { JobsAddComponent } from './jobs-add/jobs-add.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { JobsModule } from './jobs/jobs.module';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './register/register.module';
import { SingleJobModule } from './single-job/single-job.module';
import { SingleBlogModule } from './single-blog/single-blog.module';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    JobsAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    JobsModule,
    HomeModule,
    BlogModule,
    LoginModule,
    RegisterModule,
    SingleJobModule,
    SingleBlogModule,
    AdminModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
