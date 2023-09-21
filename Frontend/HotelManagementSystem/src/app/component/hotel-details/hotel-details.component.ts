import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/class/hotel';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: Hotel = new Hotel();
  id: any;
 
  
 

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute,
    private authService:SocialAuthService
  ) {}

  ngOnInit(): void {
    console.log('enter');
    this.id = this.route.snapshot.params['id'];
    this.hotelSer.getHotelByID(this.id).subscribe(
      (data) => {

        this.hotel = data;
        localStorage.setItem('hotelName',this.hotel.hotelName)
        console.log(data);
      },
      (error) => console.log(error)
    );

    
  }
  signOut(): void {
    this.authService.signOut();
    
    window.location.replace("/login");
  }
  

  navigate(id:number) {
    this.router.navigateByUrl(`booking-page/${id}`);
  }
  
  
  

  
  
}