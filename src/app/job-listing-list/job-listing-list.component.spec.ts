import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingListComponent } from './job-listing-list.component';

describe('JobListingListComponent', () => {
  let component: JobListingListComponent;
  let fixture: ComponentFixture<JobListingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
