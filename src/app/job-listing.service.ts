import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobListing } from './job-listing';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  private baseURL = "http://localhost:8080/api/v1/job_listings"

  constructor(private httClient: HttpClient) { }


  getJobs(): Observable<JobListing[]> {
    return this.httClient.get<JobListing[]>(`${this.baseURL}`);
  }

  getJobListingById(jobId: number): Observable<JobListing> {
    return this.httClient.get<JobListing>(`${this.baseURL}/${jobId}`);
  }
}
