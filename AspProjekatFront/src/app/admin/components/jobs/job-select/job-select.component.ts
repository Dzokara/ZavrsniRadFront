import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../../apiServices/job.service';
import { Job } from '../../../../interfaces/job.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-select',
  templateUrl: './job-select.component.html',
  styleUrls: ['./job-select.component.css']
})
export class JobSelectComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private router: Router,private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(response => {
      this.jobs = response.data;
    });
  }

  deleteJob(id: number): void {
    this.jobService.deleteJob(id).subscribe(
      () => {
        console.log(`Job with ID ${id} deleted successfully.`);
        this.jobs = this.jobs.filter(job => job.id !== id);
      },
      error => {
        console.error(`Error deleting job with ID ${id}:`, error);
        // Handle error cases
      }
    );
  }
}
