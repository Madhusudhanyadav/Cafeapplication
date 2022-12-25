package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafeapp.entities.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Long> {

}
