import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { Hotel } from 'src/app/class/hotel';
import { User } from 'src/app/class/user';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  id: any;
  user: User = new User();
  hotel: Hotel = new Hotel();
  booking: Booking = new Booking();
  userId = localStorage.getItem('userId');
  bookingSuccessful: boolean = false;
  checkIn:any;
  checkOut:any;
  days:any;
  date1 = new Date();
  date2 = new Date();

 



  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {

    console.log('enter');
    this.id = this.route.snapshot.params['id'];
    this.hotelSer.getHotelByID(this.id).subscribe(
      (data) => {
        this.hotel = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.getDate();
    
  }

  createBooking() {
    this.bookingSuccessful = false;
    this.booking.hotelId = this.hotel.hotelId;
    this.booking.userId = this.userId;
    
    if (this.booking.noOfRooms <= this.hotel.noOfRooms) {
      this.hotelSer.createBooking(this.booking).subscribe(
        (data) => {
          console.log(data);
          this.bookingSuccessful = true;
          if (this.bookingSuccessful) {
            this.hotel.noOfRooms =
              this.hotel.noOfRooms - this.booking.noOfRooms;
            this.hotelSer.updateHotel(this.id,this.hotel).subscribe((data: any) => {
              console.log(data);
              setTimeout(() => {
                this.router.navigateByUrl('user-Details');
              }, 1000);
              var price =
                this.hotel.hotelPrice *
                this.booking.noOfRooms *
                this.booking.noOfDays;
                localStorage.setItem('noOfRooms', this.booking.noOfRooms);
              localStorage.setItem('price', price.toString());


            });
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert('Rooms not available');
    }

  }
  onSubmit() {
    console.log(this.booking);
    this.createBooking();
  }

   
  calculateDays(type: string, e: any) {
    if (type === 'checkIn') {
      this.date1 = new Date(e.target.value);
      this.checkIn = e.target.value;
    } else {
      this.date2 = new Date(e.target.value);
      this.checkOut = e.target.value;
    }
  
    if (this.isCheckOutValid()) {
      // Check-out date is valid, enable the button
      this.booking.noOfDays = Math.ceil(Math.abs(this.date2.getTime() - this.date1.getTime()) / (1000 * 3600 * 24));
    } else {
      // Check-out date is invalid, disable the button
      this.booking.noOfDays = null;
    }
  }
  minDate:any;

  isCheckOutValid(): boolean {
    if (this.checkIn && this.checkOut) {
      const checkInDate = new Date(this.checkIn);
      const checkOutDate = new Date(this.checkOut);
      return checkOutDate > checkInDate;
    }
    return false;
  }
  getDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate < 10){
      toDate= '0' + toDate;
    }
    var month = date.getMonth() + 1;
    if(month <10){
      month = '0' + month;
    }
    var year= date.getFullYear();
    this.minDate = year + "-" + month + "-" + toDate;
    console.log(this.minDate);

  }
  signOut(): void {
    this.authService.signOut();
    
    window.location.replace("/login");
  }
 

  }
