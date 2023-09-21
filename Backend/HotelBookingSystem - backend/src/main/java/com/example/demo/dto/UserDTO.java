package com.example.demo.dto;

public class UserDTO {
	
	private int userId;
	private String userName;
	private String userAddress;
	private String userPhno;
	private String userEmail;
	private String userPassword;
	private String userType;
	

	public UserDTO(int userId, String userName, String userAddress, String userPhno, String userEmail,
			String userPassword, String userType) {
		
		this.userId = userId;
		this.userName = userName;
		this.userAddress = userAddress;
		this.userPhno = userPhno;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userType = userType;
	}





	public int getUserId() {
		return userId;
	}





	public void setUserId(int userId) {
		this.userId = userId;
	}





	public String getUserName() {
		return userName;
	}





	public void setUserName(String userName) {
		this.userName = userName;
	}





	public String getUserAddress() {
		return userAddress;
	}





	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}





	public String getUserPhno() {
		return userPhno;
	}





	public void setUserPhno(String userPhno) {
		this.userPhno = userPhno;
	}





	public String getUserEmail() {
		return userEmail;
	}





	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}





	public String getUserPassword() {
		return userPassword;
	}





	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}





	public String getUserType() {
		return userType;
	}





	public void setUserType(String userType) {
		this.userType = userType;
	}






}
