import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  users: User[] = [];
  userExits: Boolean = false;


  constructor(
    private userser: HotelBookingSystemService,
    private router: Router,
    private toast:ToastService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.userser.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        if (
          user.userName == this.user.userName ||
          user.userEmail == this.user.userEmail
        ) {
          //alert('User Already Exits with this name or email');
          this.toast.userError();
          this.userExits = true;
        }
      });
      if (!this.userExits) {
        this.userser.createUser(this.user).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => console.log(error)
        );
        //alert('You have successfully registered please login to continue');
        this.toast.userSuccess();
        setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 1000);
      }
    });
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}

//   saveUser() {
//     this.userser.createUser(this.user).subscribe (
//       (data) => {
//         console.log(data);
//       },
//       (error) => console.log(error)
//   );
//     setTimeout(() => {
//       this.router.navigateByUrl('login');
//     }, 1000);
//   }
//   onSubmit() {
//     console.log(this.user);
//     this.saveUser();
//   }
// }