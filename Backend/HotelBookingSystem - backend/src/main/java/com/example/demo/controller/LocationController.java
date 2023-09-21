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


import com.example.demo.entity.Location;

import com.example.demo.service.LocationServiceImplementation;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/locations")
public class LocationController {
   
private LocationServiceImplementation locationSer;
    
	@Autowired
	public LocationController(LocationServiceImplementation locationSer) {
		
		this.locationSer = locationSer;
	}
	
	@GetMapping ("/list")
	public List<Location> getAllLocationsData() {      //localhost:8080/locations/list
		List<Location> location =locationSer.displayAll();
		return location;
	}
	@GetMapping ("/list/{locationId}")
	public Location getLocationsData(@PathVariable ("locationId") int locationId) {      //localhost:8080/locations/list/id
		Location location =locationSer.getById(locationId);
		if (location==null) { 
			throw new RuntimeException("Location not found with the given location id");
		}
		return location;
	}
	@PostMapping ("/list")
	public void insertLocation(@RequestBody Location location ) {
//		location.setLocationId(1);
		locationSer.insertOrUpdate(location);
	}
	@PutMapping ("/list")
	public void updateLocation(@RequestBody Location location ) {
		locationSer.insertOrUpdate(location);
	}
	
	@DeleteMapping ("/list/{locationId}")
	public String deleteLocationsData(@PathVariable ("locationId")int locationId) {      //localhost:8080/locations/list/id
		Location location =locationSer.getById(locationId);
		if (location==null) { 
			throw new RuntimeException("Location not found with the given id");
		}
	locationSer.removeById(locationId);
	return "Deleted Location id =" +locationId;
	}
}
