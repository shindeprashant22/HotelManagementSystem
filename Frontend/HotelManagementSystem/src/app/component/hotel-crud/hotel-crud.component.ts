import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/class/hotel';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';

@Component({
  selector: 'app-hotel-crud',
  templateUrl: './hotel-crud.component.html',
  styleUrls: ['./hotel-crud.component.css']
})
export class HotelCRUDComponent implements OnInit{

  // hotel: Hotel = new Hotel();
  hotel: Hotel[] = [];
  p: number = 1;
  count: number = 5;
  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllHotels();
  }

  navigate() {
    this.router.navigate(['create-hotel']);
  }

  getAllHotels() {
    return this.hotelSer.getAllHotels().subscribe((data: any) => {
      this.hotel = data;
      console.log(data);
    });
  }
  navigateToUpdate(id: number) {
   this.router.navigateByUrl(`update-hotel/${id}`);
 }

  

  deleteHotel(id: number) {
   if(confirm('Are you sure you want to delete this hotel')){
    this.hotelSer.deleteHotel(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.getAllHotels();
    }, 1000);
  }
 }

}