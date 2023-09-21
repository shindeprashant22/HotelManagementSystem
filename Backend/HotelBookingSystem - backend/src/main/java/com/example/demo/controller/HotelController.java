package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Hotel;
import com.example.demo.service.HotelServiceImplementation;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/hotels")
public class HotelController {
	
	private HotelServiceImplementation hotelSer;
    
	@Autowired
	public HotelController(HotelServiceImplementation hotelSer) {
		
		this.hotelSer = hotelSer;
	}
	
	@GetMapping ("/list")
	public List<Hotel> getAllHotelsData() {      //localhost:8080/hotels/list
		List<Hotel> hotel =hotelSer.displayAll();
		return hotel;
	}
	@GetMapping ("/list/{hotelId}")
	public Hotel getHotelsData(@PathVariable ("hotelId") int hotelId) {      //localhost:8080/hotels/list/id
		Hotel hotel =hotelSer.getById(hotelId);
		if (hotel==null) { 
			throw new RuntimeException("Hotel not found with the given hotel id");
		}
		return hotel;
	}
	@PostMapping ("/list")
	public void insertHotel(@RequestBody Hotel hotel ) {
		hotel.setHotelId(0);
		hotelSer.insertOrUpdate(hotel);
	}
	@PutMapping ("/list")
	public void updateHotel(@RequestBody Hotel hotel ) {
		hotelSer.insertOrUpdate(hotel);
	}
	
	@DeleteMapping ("/list/{hotelId}")
	public String deleteHotelsData(@PathVariable ("hotelId")int hotelId) {      //localhost:8080/hotels/list/id
		Hotel hotel =hotelSer.getById(hotelId);
		if (hotel==null) { 
			throw new RuntimeException("Hotel not found with the given id");
		}
	hotelSer.removeById(hotelId);
	return "Deleted Hotel id =" +hotelId;
	}
	
	@GetMapping("/getHotelByLocation/{locationName}")
	public List<Hotel> getHotelByLocation(@PathVariable("locationName") String locationName) {
	    return hotelSer.getHotelByLocation(locationName);
	}
	
	
	
	
	

}
