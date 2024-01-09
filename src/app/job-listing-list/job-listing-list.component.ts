import { Component } from '@angular/core';
import { JobListing } from '../job-listing';
import { JobListingService } from '../job-listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listing-list',
  templateUrl: './job-listing-list.component.html',
  styleUrl: './job-listing-list.component.css'
})
export class JobListingListComponent {
  jobListings: JobListing[];

  constructor(private jobListingService: JobListingService, private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    return this.jobListingService.getJobs().subscribe(data => {
      console.log(data);
      this.jobListings = data;
    });
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
