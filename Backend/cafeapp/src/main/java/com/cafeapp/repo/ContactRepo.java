package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafeapp.entities.Contact;

public interface ContactRepo extends JpaRepository<Contact,Integer>{
	
}
