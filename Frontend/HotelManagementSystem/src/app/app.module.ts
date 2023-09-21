import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPipe } from './class/location.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AdminComponent } from './component/admin/admin.component';
import { BookingCRUDComponent } from './component/booking-crud/booking-crud.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { ClientComponent } from './component/client/client.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CreateHotelComponent } from './component/create-hotel/create-hotel.component';
import { CreateLocationComponent } from './component/create-location/create-location.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

//import { NgImageSliderModule } from 'ng-image-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';

import { MessageComponent } from './component/message/message.component';
import { PaymentComponent } from './component/payment/payment.component';
import { TermcondComponent } from './component/termcond/termcond.component';
import { UpdateHotelComponent } from './component/update-hotel/update-hotel.component';
import { UpdateLocationComponent } from './component/update-location/update-location.component';
import { UpdateUserComponent } from './component/user-crud/update-user/update-user.component';
import { UserCRUDComponent } from './component/user-crud/user-crud.component';
import { UserComponent } from './component/user/user.component';

import { WishlistComponent } from './component/wishlist/wishlist.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { HotelCRUDComponent } from './component/hotel-crud/hotel-crud.component';
import { HotelDetailsComponent } from './component/hotel-details/hotel-details.component';
import { LocationCRUDComponent } from './component/location-crud/location-crud.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { SuccessComponent } from './component/success/success.component';
import {
  GoogleLoginProvider,
 
} from '@abacritt/angularx-social-login';
import { ErrorComponent } from './component/error/error.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentCrudComponent } from './component/payment-crud/payment-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AdminComponent,
    BookingCRUDComponent,
    BookingPageComponent,
    ClientComponent,
    ContactUsComponent,
    CreateHotelComponent,
    CreateLocationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SuccessComponent,
    MessageComponent,
    PaymentComponent,
    TermcondComponent,
    UpdateHotelComponent,
    UpdateLocationComponent,
    UpdateUserComponent,
    UserCRUDComponent,
    UserComponent,
    LocationPipe,
    UserDetailsComponent,
    WishlistComponent,
    HotelCRUDComponent,
    HotelDetailsComponent,
    LocationCRUDComponent,
    ErrorComponent,
    PaymentCrudComponent,
   
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    //NgImageSliderModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '530534374081-h3bu7aouid1qh6vpjni6s8emodt6tgls.apps.googleusercontent.com'
          )
        }
       
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
