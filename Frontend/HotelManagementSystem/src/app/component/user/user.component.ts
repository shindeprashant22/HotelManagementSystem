import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/class/hotel';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { ToastService } from 'src/app/service/toast.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  searchText:any;
  hotel: Hotel[] = [];
  id:any;
  userName = localStorage.getItem('userName');
  hotl: Hotel = new Hotel();
 

   constructor(
     private hotelSer: HotelBookingSystemService,
     private router: Router,
     private route: ActivatedRoute,
     private wishListServ: WishlistService,
     private toast: ToastService,
     private authService: SocialAuthService
   ) {}
   ngOnInit(): void {
    this.getAllHotels();
  }
  getAllHotels() {
    return this.hotelSer.getAllHotels().subscribe((data: any) => {
      this.hotel = data;
      console.log(data);
    });

}
navigateToDetails(id: number) {
  this.router.navigateByUrl(`hotel-details/${id}`);
}
getUserbyId() {
  return this.hotelSer.getUserByID(this.id).subscribe((data: any) => {
    this.hotl = data;
    console.log(data);
  });
}
addToWishList(id: any) {
  this.hotelSer.getHotelByID(id).subscribe((data: any) => {
    this.hotl = data;
    this.wishListServ.addHotelToWishList(this.hotl);
  });
}
navigateToWishlist(id: number) {
  this.addToWishList(id);
  //this.router.navigateByUrl(`wishlist/${id}`);
  this.toast.userWishlist();
}
signOut(): void {
  this.authService.signOut();
  
  window.location.replace("/login");
}
searchHotelsByLocation() {
  if (!this.searchText) {
    // Handle case when search text is empty
    // You can show an error message to the user, prompt to enter a valid location, etc.
    return;
  }

  this.hotelSer.getHotelByLocation(this.searchText).subscribe(
    (data: Hotel[]) => {
      this.hotel = data;
      // Check if any hotels are found for the given location
      if (data.length === 0) {
        // Handle case when no hotels are found for the given location
        // You can display a proper message to the user, e.g., "Hotels not found for the given location."
        // You can also clear the existing hotel data to ensure the correct message is shown.
      }
    },
    (error) => {
      // Handle API error here, if needed.
      console.error('Error fetching hotels by location:', error);
    }
  );
}



}