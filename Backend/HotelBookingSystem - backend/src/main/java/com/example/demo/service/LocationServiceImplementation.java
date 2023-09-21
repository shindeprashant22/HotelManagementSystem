package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao_persistence.LocationRepository;

import com.example.demo.entity.Location;

@Service
public class LocationServiceImplementation {

	
private LocationRepository locationRep;
    
   @Autowired
	public LocationServiceImplementation(LocationRepository locationRep) {
		
		this.locationRep = locationRep;
	}
	@Transactional
	public List<Location> displayAll(){
		List<Location> location= locationRep.findAll();
		return location;
	}
	@Transactional
	public Location getById(int locationId) {
		return locationRep.findById(locationId).get();
	}
	@Transactional
	public void insertOrUpdate(Location location) {
		locationRep.save(location);
	}
	@Transactional
	public void removeById(int locationId) {
		locationRep.deleteById(locationId);
	}
	

}
