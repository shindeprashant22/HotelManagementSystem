import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { Location } from 'src/app/class/location';
@Component({
  selector: 'app-location-crud',
  templateUrl: './location-crud.component.html',
  styleUrls: ['./location-crud.component.css']
})
export class LocationCRUDComponent implements OnInit{
  location: Location[] = [];
   locations: Location = new Location();
   id: any;

  p: number = 1;
  count: number = 5;
  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getAllLocations();
  }

  navigate() {
    this.router.navigate(['create-location']);
  }

  navigateToUpdate(id: number) {
    this.router.navigateByUrl(`update-location/${id}`);
  }

  getAllLocations() {
    return this.hotelSer.getAllLocations().subscribe((data: any) => {
      this.location = data;
      console.log(data);
    });
  }

  updateLocation(id: number) {
    this.router.navigateByUrl(`update-location/${id}`);
  }

  deleteLocation(id: number) {
    if(confirm('Are you sure you want to delete this location')){
    this.hotelSer.deleteLocation(id).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
    setTimeout(() => {
      this.getAllLocations();
    }, 1000);
  }
}
  
}