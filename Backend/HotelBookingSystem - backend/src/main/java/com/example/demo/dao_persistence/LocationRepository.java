package com.example.demo.dao_persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {

}
