package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="booking_id")
	private int bookingId;
	@Column(name="hotel_id")
	private int hotelId;
	@Column(name="user_id")
	private int userId;
	@Column(name="no_of_rooms")
	private int noOfRooms;
	@Column(name="no_of_days")
	private int noOfDays;
	
	@ManyToOne(targetEntity=Hotel.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="hotel_id",insertable = false, updatable = false)
	private Hotel hotel;
	
	@ManyToOne(targetEntity=User.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="user_id",insertable = false, updatable = false)
	private User user;
	
//	@OneToOne(mappedBy="booking")
//	private User user;
//	
	
	public Booking() {
	
	}

public Booking(int bookingId, int hotelId, int userId, int noOfRooms, int noOfDays, Hotel hotel, User user) {
	super();
	this.bookingId = bookingId;
	this.hotelId = hotelId;
	this.userId = userId;
	this.noOfRooms = noOfRooms;
	this.noOfDays = noOfDays;
	this.hotel = hotel;
	this.user = user;
}

public int getBookingId() {
	return bookingId;
}

public void setBookingId(int bookingId) {
	this.bookingId = bookingId;
}

public int getHotelId() {
	return hotelId;
}

public void setHotelId(int hotelId) {
	this.hotelId = hotelId;
}

public int getUserId() {
	return userId;
}

public void setUserId(int userId) {
	this.userId = userId;
}


public Hotel getHotel() {
	return hotel;
}

public void setHotel(Hotel hotel) {
	this.hotel = hotel;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

public int getNoOfRooms() {
	return noOfRooms;
}

public void setNoOfRooms(int noOfRooms) {
	this.noOfRooms = noOfRooms;
}

public int getNoOfDays() {
	return noOfDays;
}

public void setNoOfDays(int noOfDays) {
	this.noOfDays = noOfDays;
}

@Override
public String toString() {
	return "Booking [bookingId=" + bookingId + ", hotelId=" + hotelId + ", userId=" + userId + ", noOfRooms="
			+ noOfRooms + ", noOfDays=" + noOfDays + "]";
}

	
	
	
	
	
}
