import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  un: any;
  pwd: any;
  users: User[] = [];
  count:number | undefined;
  
  user:any;
  loggedIn:any;


  constructor(
    private route: Router,
    private hotelService: HotelBookingSystemService,
    private toast: ToastService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void { 
    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    this.route.navigateByUrl('user');
    console.log(this.user);
  });
}


  login(loginForm: any) {
    this.count=0;

    let invalidCredentials = true;
    this.hotelService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        if (
          loginForm.un == user.userName &&
          loginForm.pwd == this.decryptPassword(user.userPassword)

        ) {
          this.count=1;
          // invalidCredentials = false;
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('userName', user.userName);
          localStorage.setItem('userPhno', user.userPhno);
          localStorage.setItem('userAddress', user.userAddress);
          localStorage.setItem('userEmail', user.userEmail);
          if (user.userType == 'Admin') {
            this.route.navigateByUrl('admin');
          } else {
            this.route.navigateByUrl('user');
          }
        }
      });
      if(this.count==0){

      // if (invalidCredentials) {
       // alert('Invalid Credentials');
       this.toast.userLogin();
      }
    });
  }
  decryptPassword(encryptedString: string):string {
    let decryptedString: string = '';
    if(encryptedString) {
      try {
        return atob(atob(encryptedString.split('').reverse().join('')));
      } catch (error: any) {
        alert(error);
      }
    }
    return decryptedString;
  }

}