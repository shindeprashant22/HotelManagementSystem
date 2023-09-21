import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/class/user";
import { HotelBookingSystemService } from "src/app/service/hotel-booking-system.service";

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCRUDComponent implements OnInit {
  user: User[] = [];
  users: User = new User();
  id: any;
  p: number = 1;
  count: number = 5;
  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getAllUsers();
  }

  navigate() {
    this.router.navigate(['create-user']);
  }

  navigateToUpdate(id: number) {
    this.router.navigateByUrl(`update_user/${id}`);
  }


  getAllUsers() {
    return this.hotelSer.getAllUsers().subscribe((data: any) => {
      this.user = data;
      console.log(data);
    });
  }

  updateUser(id: number) {
    this.router.navigateByUrl(`update-user/${id}`);
  }

  deleteUser(id: number) {
    if(confirm('Are you sure you want to delete this user')){
    this.hotelSer.deleteUser(id).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
    setTimeout(() => {
      this.getAllUsers();
    }, 1000);
  }
}
  

}