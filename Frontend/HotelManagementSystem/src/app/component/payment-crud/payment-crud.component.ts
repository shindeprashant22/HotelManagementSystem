import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/class/payment';
import { HotelBookingSystemService } from 'src/app/service/hotel-booking-system.service';

@Component({
  selector: 'app-payment-crud',
  templateUrl: './payment-crud.component.html',
  styleUrls: ['./payment-crud.component.css']
})
export class PaymentCrudComponent implements OnInit {
  payments: Payment[] = []; // Specify the type as an array of Payment objects
  payment:any;
  id: any;

  p: number = 1;
  count: number = 5;

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllPaymentsData();
  }

  getAllPaymentsData() {
    return this.hotelSer.getAllPaymentsData().subscribe(
      (data: any) => {
        this.payments = data;
        console.log("Payments data:", data);
      },
      (error) => {
        console.error("Error:", error);
      }
    );
    
    }}