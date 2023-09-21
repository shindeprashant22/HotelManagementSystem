package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao_persistence.UserRepository;

import com.example.demo.entity.User;

@Service
public class UserServiceImplementation {

private UserRepository userRep;
    
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	public UserServiceImplementation(UserRepository userRep) {
		
		this.userRep = userRep;
	}
	@Transactional
	public List<User> displayAll(){
		List<User> user= userRep.findAll();
		return user;
	}
	@Transactional
	public User getById(int userId) {
		User userFromDB = userRep.findById(userId).get();
		return userFromDB;

		//return userRep.findById(userId).get();
	}
	@Transactional
	public String insertOrUpdate(User user) {
		user.setUserPassword(this.passwordEncoder.encode(user.getUserPassword()));
		userRep.save(user);
		return "Success";

		
	}
	@Transactional
	public void removeById(int userId) {
		userRep.deleteById(userId);
	}
	@Transactional
	public void updateUser(User user) {
		userRep.save(user);
	}

	
}
