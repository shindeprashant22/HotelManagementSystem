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


import com.example.demo.entity.User;
import com.example.demo.service.UserServiceImplementation;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/users")
public class UserController {

	
    private UserServiceImplementation userSer;
    
	@Autowired
	public UserController(UserServiceImplementation userSer) {
		
		this.userSer = userSer;
	}
	
	@GetMapping ("/list")
	public List<User> getAllUsersData() {      //localhost:8080/users/list
		List<User> user =userSer.displayAll();
		return user;
	}
	@GetMapping ("/list/{userId}")
	public User getUsersData(@PathVariable ("userId") int userId) {      //localhost:8080/users/list/id
		User user =userSer.getById(userId);
		if (user==null) { 
			throw new RuntimeException("User not found with the given user id");
		}
		return user;
	}
	@PostMapping ("/list")
	public void insertUser(@RequestBody User user ) {
		user.setUserId(0);
		userSer.insertOrUpdate(user);
	}
	@PutMapping ("/list")
	public void updateUser(@RequestBody User user ) {
		userSer.insertOrUpdate(user);
	}
	
	@DeleteMapping ("/list/{userId}")
	public String deleteUsersData(@PathVariable ("userId")int userId) {      //localhost:8080/users/list/id
		User user =userSer.getById(userId);
		if (user==null) { 
			throw new RuntimeException("User not found with the given id");
		}
	userSer.removeById(userId);
	return "Deleted User id =" +userId;
	}
	

}
