package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafeapp.entities.Item;

public interface ItemRepo extends JpaRepository<Item,Integer>{

}
