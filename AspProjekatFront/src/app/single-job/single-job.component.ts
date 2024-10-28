import { Component } from '@angular/core';
import { Job } from '../interfaces/job.models';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../apiServices/job.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent {
  job!: Job;
  message: string = '';

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(this.route.snapshot.params['id']);
      console.log(id);
      this.jobService.getJobById(id).subscribe((data: Job) => {
        console.log(data)
        this.job = data;
      });
    });
  }

  onSaveJob(): void {
    const jobId = this.job.id;
    this.jobService.saveJob(jobId).subscribe({
      next: (response) => {
        console.log('Job saved successfully', response);
        this.message = 'Job saved successfully!';
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          this.message = 'You\'ve already saved this job.';
        }
        else if(error.status === 401){
          this.message = 'You need to be logged in to save a job.'
        }
         else {
          console.error('Error saving job', error);
          this.message = 'An error occurred while saving the job.';
        }
      }
    });
  }
}
