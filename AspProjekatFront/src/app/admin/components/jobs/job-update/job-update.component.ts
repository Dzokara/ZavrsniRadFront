import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../../../apiServices/job.service';
import { PositionService } from '../../../../apiServices/position.service';
import { CompanyService } from '../../../../apiServices/company.service';
import { RegionService } from '../../../../apiServices/region.service';
import { Job, Company, Position, Region } from '../../../../interfaces/job.models';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {
  jobForm: FormGroup;
  job: Job = {
    id: 0,
    position: { id: 0, name: ''},
    company: { id: 0, name: '', description: '', image: '' },
    technologies: [],
    region: { id: 0, name: '' },
    type: { id: 0, name: ''},
    description: '',
    salary: 0,
    benefits: [],
    categories: [],
    deadline: '',
    remote: { id: 0, name: ''},
  };
  positions: Position[] = [];
  companies: Company[] = [];
  regions: Region[] = [];
  types: { id: number, name: string }[] = [
    { id: 3, name: 'Full Time' },
    { id: 4, name: 'Part Time' }
  ];
  remoteOptions: { id: number, name: string }[] = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Office' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private positionService: PositionService,
    private companyService: CompanyService,
    private regionService: RegionService
  ) {
    this.jobForm = this.fb.group({
      id: [''], // Hidden input for job ID
      position: [null, Validators.required],
      company: [null, Validators.required],
      region: [null, Validators.required],
      type: [null, Validators.required],
      salary: ['', Validators.required],
      description: ['', Validators.required],
      remote: [null, Validators.required],
      deadline: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Use '+' to convert string to number
      console.log('Job ID:', id);

      // Fetch job data from API
      this.jobService.getJobById(id).subscribe((data: Job) => {
        console.log('Job Data:', data);
        this.job = data;

        // Set form values after job data is fetched
        this.jobForm.patchValue({
          id: this.job.id,
          position: this.job.position.id,
          company: this.job.company.id,
          region: this.job.region.id,
          type: this.job.type.id,
          salary: this.job.salary.toString(), // Ensure salary is converted to string if needed
          description: this.job.description,
          remote: this.job.remote.id,
          deadline: this.job.deadline.split('T')[0] // Adjust date format if necessary
        });
      });

      this.loadPositions();
      this.loadCompanies();
      this.loadRegions();
    });
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const formData = new FormData();
      formData.append('id', this.jobForm.get('id')?.value);
      formData.append('positionId', JSON.stringify(this.jobForm.get('position')?.value));
      formData.append('companyId', JSON.stringify(this.jobForm.get('company')?.value));
      formData.append('regionId', JSON.stringify(this.jobForm.get('region')?.value));
      formData.append('typeId', JSON.stringify(this.jobForm.get('type')?.value));
      formData.append('salary', this.jobForm.get('salary')?.value);
      formData.append('description', this.jobForm.get('description')?.value);
      formData.append('remoteId', JSON.stringify(this.jobForm.get('remote')?.value));
      formData.append('deadline', this.jobForm.get('deadline')?.value);

      this.jobService.updateJob(formData).subscribe(
        response => {
          console.log('Job updated successfully:', response);
          this.router.navigate(['/admin/jobs']);
        },
        error => {
          console.error('Error updating job:', error);
        }
      );
    } else {
      // Form is invalid, handle accordingly
    }
  }

  private loadPositions(): void {
    this.positionService.getPositions().subscribe(positions => {
      this.positions = positions.data || [];
    });
  }

  private loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies.data || [];
    });
  }

  private loadRegions(): void {
    this.regionService.getRegions().subscribe(regions => {
      this.regions = regions.data || [];
    });
  }
}
