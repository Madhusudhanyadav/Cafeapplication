package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafeapp.entities.ItemQuantity;

public interface ItemQuantityRepo extends JpaRepository<ItemQuantity,Integer> {

}
