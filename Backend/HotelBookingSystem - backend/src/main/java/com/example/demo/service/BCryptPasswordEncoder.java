package com.example.demo.service;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;

import org.springframework.stereotype.Service;

@Service

public class BCryptPasswordEncoder {
	
private static Encoder encoder;
	
	private static Decoder decoder;
	
	static {
		encoder = Base64.getEncoder();
		decoder = Base64.getDecoder();
	}
	
	
	public String encode(String plainPassword) {
		String encryptedString = null;
		if (plainPassword != null && !plainPassword.isEmpty()) {
			String encoded = new String(
			encoder.encode(encoder.encode(plainPassword.getBytes()))
			);
			return new StringBuffer().append(encoded).reverse().toString();
		}
		
		return encryptedString;
	}
	
	public String decode(String encryptedString) {
		String plainPassword = null;
		if (encryptedString != null && !encryptedString.isEmpty()) {
			try {
				String encoded = new StringBuffer().append(encryptedString).reverse().toString();
				return new String(
						decoder.decode(decoder.decode(encoded.getBytes()))
						);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		return plainPassword;
	}
	



}
