import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/class/hotel';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { Location } from 'src/app/class/location';
@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  location: Location[]=[];
 
   hotel: Hotel = new Hotel();
  
   constructor(
     private hotelSer: HotelBookingSystemService,
     private router: Router
   ) {}
 
   ngOnInit(): void {
     this.getAllLocations();
   }
 
   createHotel() {
     this.hotelSer.createHotel(this.hotel).subscribe(
       (data) => {
         console.log(data);
       },
       (error) => console.log(error)
     );
     setTimeout(() => {
       this.router.navigateByUrl('hotel-crud');
     }, 1000);
   }
 
   onSubmit() {
     console.log(this.hotel);
     this.createHotel();
   }
   getAllLocations() {
     return this.hotelSer.getAllLocations().subscribe((data:any)=>
     {
       this.location=data;
       console.log(data);
     })
   }
 
 
   
 
 
  
   
 
 }