import { Injectable } from '@angular/core';
import { Hotel } from '../class/hotel';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList: Hotel[] = [];

  constructor() {}
  addHotelToWishList(hotel: Hotel) {
    this.wishList.push(hotel);
  }

  getWishList(): Hotel[] {
    return this.wishList;
  }

  removeFromWishList(id: number) {
    this.wishList = this.wishList.filter((hotel: Hotel) => {
      return hotel.hotelId != id;
    });
  }
  
}
