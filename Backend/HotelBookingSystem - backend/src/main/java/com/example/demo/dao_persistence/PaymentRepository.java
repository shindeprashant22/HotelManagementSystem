package com.example.demo.dao_persistence;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
