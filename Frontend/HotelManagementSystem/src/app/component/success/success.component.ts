import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  noOfRooms=localStorage.getItem('noOfRooms');
    hotelName=localStorage.getItem('hotelName');

}
