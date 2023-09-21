package com.example.demo.entity;


import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="hotel")
public class Hotel {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="hotel_id")
	private int hotelId;
	@Column(name="hotel_name")
	private String hotelName;
	@Column(name="hotel_address")
	private String hotelAddress;
	@Column(name="hotel_image")
	private String hotelImage;
	@Column(name="hotel_price")
	private int hotelPrice;
	@Column(name="no_of_rooms")
	private int noOfRooms;
	@Column(name="location_id")
	private int locationId;
	@Column(name="hotel_details")
	private String hotelDetails;
	@Column(name="hotel_image1")
	private String hotelImage1;
	@Column(name="hotel_image2")
	private String hotelImage2;
	@Column(name="rating")
	private String rating;
	
	//manyemployees--onedept  (m-o)
	
		@ManyToOne(targetEntity=Location.class,fetch = FetchType.EAGER) 
		@JoinColumn(name="location_id",insertable = false, updatable = false)
		private Location location;
		
		@OneToMany(mappedBy="hotel")
		private Set<Booking> bookings;
	
	public Hotel() {
		
	}

	public Hotel(int hotelId, String hotelName, String hotelAddress, String hotelImage, int hotelPrice, int noOfRooms,
			int locationId, String hotelDetails, String hotelImage1, String hotelImage2, String rating) {
		
		this.hotelId = hotelId;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.hotelImage = hotelImage;
		this.hotelPrice = hotelPrice;
		this.noOfRooms = noOfRooms;
		this.locationId = locationId;
		this.hotelDetails=hotelDetails;
		this.hotelImage = hotelImage1;
		this.hotelImage = hotelImage2;
		this.rating = rating;
		
	}

	public int getHotelId() {
		return hotelId;
	}

	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	public String getHotelImage() {
		return hotelImage;
	}

	public void setHotelImage(String hotelImage) {
		this.hotelImage = hotelImage;
	}

	public int getHotelPrice() {
		return hotelPrice;
	}

	public void setHotelPrice(int hotelPrice) {
		this.hotelPrice = hotelPrice;
	}

	public int getNoOfRooms() {
		return noOfRooms;
	}

	public void setNoOfRooms(int noOfRooms) {
		this.noOfRooms = noOfRooms;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}
	public String getHotelDetails() {
		return hotelDetails;
	}

	public void setHotelDetails(String hotelDetails) {
		this.hotelDetails = hotelDetails;
	}
	public void setHotelImage1(String hotelImage1) {
		this.hotelImage1 = hotelImage1;
	}
	public void setHotelImage2(String hotelImage2) {
		this.hotelImage2 = hotelImage2;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating =rating;
	}

	@Override
	public String toString() {
		return "Hotel [hotelId=" + hotelId + ", hotelName=" + hotelName + ", hotelAddress=" + hotelAddress
				+ ", hotelImage=" + hotelImage + ", hotelPrice=" + hotelPrice + ", noOfRooms=" + noOfRooms
				+ ", locationId=" + locationId + ", hotelDetails=" + hotelDetails + ", hotelImage1=" + hotelImage1
				+ ", hotelImage2=" + hotelImage2 +", rating=" + rating + "]";
	}

	
	
	
	

}
