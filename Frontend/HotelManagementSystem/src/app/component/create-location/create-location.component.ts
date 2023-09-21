import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { Location } from 'src/app/class/location';
@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent {
  location: Location= new Location();

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createLocation() {
    this.hotelSer.createLocation(this.location).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.router.navigateByUrl('location-crud');
    }, 1000);
  }

  onSubmit() {
    console.log(this.location);
    this.createLocation();
  }

}