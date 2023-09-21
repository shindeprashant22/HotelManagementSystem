package com.example.demo.dao_persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	 List<Hotel> getHotelsByLocation_LocationName(String locationName);
}
