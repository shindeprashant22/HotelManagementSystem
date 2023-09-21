package com.example.demo.service;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao_persistence.HotelRepository;

import com.example.demo.entity.Hotel;

@Service
public class HotelServiceImplementation {
	
	private HotelRepository hotelRep;
    
	@Autowired
	public HotelServiceImplementation(HotelRepository hotelRep) {
		
		this.hotelRep = hotelRep;
	}
	@Transactional
	public List<Hotel> displayAll(){
		List<Hotel> hotel= hotelRep.findAll();
		return hotel;
	}
	@Transactional
	public Hotel getById(int hotelId) {
		return hotelRep.findById(hotelId).get();
	}
	@Transactional
	public void insertOrUpdate(Hotel hotel) {
		hotelRep.save(hotel);
	}
	@Transactional
	public void removeById(int hotelId) {
		hotelRep.deleteById(hotelId);
	}
	@Transactional
	public List<Hotel> getHotelByLocation(String locationName) {
	    return hotelRep.getHotelsByLocation_LocationName(locationName);
	}
	
	

}
