import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PositionService } from '../../../../apiServices/position.service';
import { CompanyService } from '../../../../apiServices/company.service';
import { RegionService } from '../../../../apiServices/region.service';
import { Router } from '@angular/router';
import { Company } from '../../../../interfaces/job.models';
import { JobService } from '../../../../apiServices/job.service';

@Component({
  selector: 'app-job-insert',
  templateUrl: './job-insert.component.html',
  styleUrl: './job-insert.component.css'
})
export class JobInsertComponent {
  jobForm: FormGroup;
  positions: any[] = [];
  companies: Company[] = [];
  regions: any[] = [];
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
    private router: Router,
    private positionService: PositionService,
    private companyService: CompanyService,
    private regionService: RegionService,
    private jobService : JobService
  ) {
    this.jobForm = this.fb.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
      region: ['', Validators.required],
      type: ['', Validators.required],
      salary: ['', Validators.required],
      description: ['',Validators.required],
      remote: ['',Validators.required],
      deadline: ['',Validators.required],
      BenefitIds: [[1]], // Default value for BenefitIds
      CategoryIds: [[1]], // Default value for CategoryIds
      TechnologyIds: [[1]], // Default value for TechnologyIds
      PositionId: [''], // Ensure this is of type number
      CompanyId: [''], // Ensure this is of type number
      RegionId: [''], // Ensure this is of type number
      TypeId: [''], // Ensure this is of type number
      RemoteId: [''] // Ensure this is of type number
    });
  }

  ngOnInit(): void {
    this.loadPositions();
    this.loadCompanies();
    this.loadRegions();
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const formData = {
        ...this.jobForm.value,
        PositionId: +this.jobForm.value.position, // Convert to number
        CompanyId: +this.jobForm.value.company, // Convert to number
        TechnologyIds: [1], // Adjust as per your backend requirements
        RegionId: +this.jobForm.value.region, // Convert to number
        TypeId: +this.jobForm.value.type, // Convert to number
        Description: this.jobForm.value.description,
        Salary: +this.jobForm.value.salary, // Convert to number
        BenefitIds: [1], // Adjust as per your backend requirements
        CategoryIds: [1], // Adjust as per your backend requirements
        Deadline: this.jobForm.value.deadline,
        RemoteId: +this.jobForm.value.remote // Convert to number
      };

      this.jobService.insertJob(formData).subscribe(
        response => {
          console.log('Job inserted successfully:', response);
          this.router.navigate(['/admin/jobs']);
        },
        error => {
          console.error('Error inserting job:', error);
          // Handle error cases
        }
      );
    } else {
      // Form is invalid, handle accordingly
    }
  }

  private loadPositions(): void {
    this.positionService.getPositions().subscribe(positions => {
      this.positions = positions.data;
    });
  }

  private loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies.data;
    });
  }

  private loadRegions(): void {
    this.regionService.getRegions().subscribe(regions => {
      this.regions = regions.data;
    });
  }
}

