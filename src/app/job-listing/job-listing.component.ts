import { Component } from '@angular/core';
import { JobListing } from '../job-listing';
import { ActivatedRoute, Router } from '@angular/router';
import { JobListingService } from '../job-listing.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {
  jobListing: JobListing;

  constructor(private route: ActivatedRoute,private router: Router, private jobListingService: JobListingService) { }


  ngOnInit() {
    // Read the job ID from the route parameter
    this.route.params.subscribe((params) => {
      const jobId = +params['id']; // Convert the parameter to a number

      // Fetch the job listing data by ID from the service
      this.jobListingService.getJobListingById(jobId).subscribe(
        (data) => {
          this.jobListing = data;
        },
        (error) => {
          console.error('Error fetching job listing details', error);
        }
      );
    });
  }

  goBack() {
    this.router.navigate(['/job-listing-list']);
  }
}