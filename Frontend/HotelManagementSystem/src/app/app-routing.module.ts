import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TermcondComponent } from './component/termcond/termcond.component';
import { UserComponent } from './component/user/user.component';
import { UpdateUserComponent } from './component/user-crud/update-user/update-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { ClientComponent } from './component/client/client.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CreateHotelComponent } from './component/create-hotel/create-hotel.component';
import { CreateLocationComponent } from './component/create-location/create-location.component';
import { MessageComponent } from './component/message/message.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentCrudComponent } from './component/payment-crud/payment-crud.component';
import { SuccessComponent } from './component/success/success.component';
import { UpdateHotelComponent } from './component/update-hotel/update-hotel.component';
import { UpdateLocationComponent } from './component/update-location/update-location.component';
import { UserCRUDComponent } from './component/user-crud/user-crud.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { BookingCRUDComponent } from './component/booking-crud/booking-crud.component';
import { HotelDetailsComponent } from './component/hotel-details/hotel-details.component';
import { LocationCRUDComponent } from './component/location-crud/location-crud.component';
import { HotelCRUDComponent } from './component/hotel-crud/hotel-crud.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'termcond', component: TermcondComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'user', component: UserComponent},
  { path: 'user-crud', component: UserCRUDComponent},
  { path: 'update_user/:id', component: UpdateUserComponent},
  { path: 'hotel-crud', component: HotelCRUDComponent},
  { path: 'create-hotel', component: CreateHotelComponent},
  { path: 'location-crud', component: LocationCRUDComponent},
  { path: 'create-hotel', component: CreateHotelComponent},
  { path: 'create-location', component: CreateLocationComponent},
  { path: 'booking-crud', component: BookingCRUDComponent},
  { path: 'booking-page/:id', component:  BookingPageComponent},
  { path: 'update-hotel/:id', component:  UpdateHotelComponent },
  { path: 'update-location/:id', component:  UpdateLocationComponent },
  { path: 'hotel-details/:id', component:  HotelDetailsComponent },
  { path: 'contactus', component: ContactUsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'payment-crud', component: PaymentCrudComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'message', component: MessageComponent},
  { path: 'client', component: ClientComponent},
  { path: 'wishlist/:id',component: WishlistComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'user-Details', component: UserDetailsComponent},
  //error
  {path:'**',component:ErrorComponent}//should be at last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
