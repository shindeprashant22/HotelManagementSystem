package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistence.BookingRepository;

import com.example.demo.entity.Booking;


@Service
public class BookingServiceImplementation {
	
private BookingRepository bookingRep;
    
	@Autowired
	public BookingServiceImplementation(BookingRepository bookingRep) {
		
		this.bookingRep = bookingRep;
	}
	@Transactional
	public List<Booking> displayAll(){
		List<Booking> booking= bookingRep.findAll();
		return booking;
	}
	@Transactional
	public Booking getById(int bookingId) {
		return bookingRep.findById(bookingId).get();
	}
	@Transactional
	public void insertOrUpdate(Booking booking) {
		bookingRep.save(booking);
	}
	@Transactional
	public void removeById(int bookingId) {
		bookingRep.deleteById(bookingId);
	}

}
