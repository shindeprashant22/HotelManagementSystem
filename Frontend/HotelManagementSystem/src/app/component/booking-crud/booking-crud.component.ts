import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';

@Component({
  selector: 'app-booking-crud',
  templateUrl: './booking-crud.component.html',
  styleUrls: ['./booking-crud.component.css']
})
export class BookingCRUDComponent implements OnInit{

  booking: Booking[] = [];
  p: number = 1;
  count: number = 5;
  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  navigate() {
    this.router.navigate(['create-booking']);
  }

  getAllBookings() {
    return this.hotelSer.getAllBookings().subscribe((data: any) => {
      this.booking = data;
      console.log(data);
    });
  }

  // updateHotel(id: number) {
  //   this.router.navigateByUrl(`update_user/${id}`);
  // }

  deleteBooking(id: number) {
    if(confirm('Are you sure you want to delete this booking')){
    this.hotelSer.deleteBooking(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.getAllBookings();
    }, 1000);
  }
  }

}
