package com.cafeapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.cafeapp.entities.Order;

public interface OrderRepo extends JpaRepository<Order, Integer> {

	@Query("select o from Order o where date like CONCAT(curdate(),'%')")
	public List<Order> getOrdersByDate();
}
