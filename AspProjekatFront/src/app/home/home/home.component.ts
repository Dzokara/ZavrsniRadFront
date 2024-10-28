import { Component, OnInit } from '@angular/core';
import { Job } from '../../interfaces/job.models';
import { JobService } from '../../apiServices/job.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(response => {
      console.log(response.data)
      this.jobs = response.data;
    });
  }
}
