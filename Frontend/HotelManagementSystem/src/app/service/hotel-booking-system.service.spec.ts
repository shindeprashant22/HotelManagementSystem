import { TestBed } from '@angular/core/testing';

import { HotelBookingSystemService } from './hotel-booking-system.service';

describe('HotelBookingSystemService', () => {
  let service: HotelBookingSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelBookingSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
