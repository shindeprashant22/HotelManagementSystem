import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastr: ToastrService) {}
 
  userError(){
    this.toastr.warning("User Already Exits with this name or email")
  }

  userSuccess(){
    this.toastr.success("You have successfully registered")
  }
  
  userLogin(){
    this.toastr.error("Invalid credentials")
  }
  userWishlist(){
    this.toastr.success("Added to Favorites")
  }
  userConfirmation(){
    this.toastr.success("Your Details are confirmed!")
  }

}