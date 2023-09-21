import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/class/payment';
import { User } from 'src/app/class/user';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { ToastService } from 'src/app/service/toast.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: User= new User();
 price=localStorage.getItem('price');
 userid=localStorage.getItem('userId');
payment:any;

   userName=localStorage.getItem('userName');
   userEmail=localStorage.getItem('userEmail');
   userPhno=localStorage.getItem('userPhno');
   userAddress=localStorage.getItem('userAddress');

 constructor(private hotelSer: HotelBookingSystemService,
   private router: Router,
   private route: ActivatedRoute,
   private wishListServ: WishlistService,
   private toast: ToastService,
   private authService: SocialAuthService){}



   // navigateToClient(){
   //   this.router.navigateByUrl('/client')
   // }
   signOut(): void {
     this.authService.signOut();
     
     window.location.replace("/login");
   }
   onSubmit(){
     this.toast.userConfirmation();
     this.router.navigateByUrl('/client')
     this.createPayment();
   }

   createPayment() {
     this.userid == this.user.userId ;
     this.hotelSer.createPayment(this.payment).subscribe(
       (data) => {
         console.log(data);
       },
       (error) => console.log(error)
     );
     
   }
 


}