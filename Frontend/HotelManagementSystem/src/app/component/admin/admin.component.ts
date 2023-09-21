import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit
{
  userName = localStorage.getItem('userName');
  constructor(private router: Router){

  }
  ngOnInit(): void {
  
  }
  navigate(){
    this.router.navigate(['user-crud']);
  
  }
  navigateToHotel(){
    this.router.navigate(['hotel-crud']);
  
  }
  navigateToLocation(){
    this.router.navigate(['location-crud']);
  
  }
  navigateToBooking(){
    this.router.navigate(['booking-crud']);
  
  }
  
  navigateToPayment(){
    this.router.navigate(['payment-crud']);
  
  }
  
 

}
