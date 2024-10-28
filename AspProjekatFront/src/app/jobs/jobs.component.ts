import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces/job.models';
import { JobService } from '../apiServices/job.service';
import { RegionService } from '../apiServices/region.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  allJobs: Job[] = [];
  regions: any[] = [];
  selectedRegion: string = '';
  selectedJobType: string = '';
  keyword: string = '';

  constructor(private jobService: JobService, private regionService: RegionService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(response => {
      console.log(response.data);
      this.allJobs = response.data;
      this.jobs = response.data;
    });

    this.regionService.getRegions().subscribe(response => {
      console.log(response.data);
      this.regions = response.data;
    });
  }

  onRegionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedRegion = target.value;
    this.filterJobs();
  }

  onJobTypeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedJobType = target.value;
    this.filterJobs();
  }

  onKeywordChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.keyword = target.value;
    this.filterJobs();
  }

  filterJobs(): void {
    const keywordLower = this.keyword.toLowerCase();
    this.jobs = this.allJobs.filter(job => {
      const matchesRegion = this.selectedRegion === '' || job.region.name === this.selectedRegion;
      const matchesJobType = this.selectedJobType === '' || job.type.name === this.selectedJobType;
      const matchesKeyword = this.keyword === '' || 
                             job.position.name.toLowerCase().includes(keywordLower) || 
                             job.company.name.toLowerCase().includes(keywordLower);
      return matchesRegion && matchesJobType && matchesKeyword;
    });
  }
}
