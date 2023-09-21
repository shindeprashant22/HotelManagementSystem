package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistence.PaymentRepository;
import com.example.demo.entity.Payment;

@Service
public class PaymentServiceImplementation {

    private PaymentRepository paymentRep;

    @Autowired
    public PaymentServiceImplementation(PaymentRepository paymentRep) {
        this.paymentRep = paymentRep;
    }

    @Transactional
    public List<Payment> displayAll() {
        List<Payment> payment = paymentRep.findAll();
        return payment;
    }

    @Transactional
    public Payment getById(int paymentId) {
        return paymentRep.findById(paymentId).get();
    }

    @Transactional
    public void insertOrUpdate(Payment payment) {
        paymentRep.save(payment);
    }

    @Transactional
    public void removeById(int paymentId) {
        paymentRep.deleteById(paymentId);
    }
}