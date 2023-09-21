package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Payment;

import com.example.demo.service.PaymentServiceImplementation;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/payments")
public class PaymentController {
	
	private PaymentServiceImplementation paymentSer;
      
	@Autowired
	public PaymentController(PaymentServiceImplementation paymentSer) {
		
		this.paymentSer = paymentSer;
	}
	
	@GetMapping ("/list")
	public List<Payment> getAllPaymentsData() {      //localhost:8080/payments/list
		List<Payment> payment =paymentSer.displayAll();
		return payment;
	}
	@GetMapping ("/list/{paymentId}")
	public Payment getPaymentsData(@PathVariable ("PaymentId") int paymentId) {      //localhost:8080/payments/list/id
		Payment payment =paymentSer.getById(paymentId);
		if (payment==null) { 
			throw new RuntimeException("payment not found with the given payment id");
		}
		return payment;
	}
	@PostMapping ("/list")
	public void insertPayment(@RequestBody Payment payment ) {
		payment.setPaymentId(0);
		paymentSer.insertOrUpdate(payment);
	}
	@PutMapping ("/list")
	public void updatePayment(@RequestBody Payment payment ) {
		paymentSer.insertOrUpdate(payment);
	}
	
	@DeleteMapping ("/list/{paymentId}")
	public String deletePaymentsData(@PathVariable ("paymentId")int paymentId) {      //localhost:8080/payments/list/id
		Payment payment =paymentSer.getById(paymentId);
		if (payment==null) { 
			throw new RuntimeException("payment not found with the given id");
		}
		paymentSer.removeById(paymentId);
	return "Deleted payment id =" +paymentId;
	}
}
