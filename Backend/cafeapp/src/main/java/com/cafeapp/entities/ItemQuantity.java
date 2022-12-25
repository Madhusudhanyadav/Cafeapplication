package com.cafeapp.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "ItemQuantity")
public class ItemQuantity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int iqid;
	
	private int item_id;
	private int quantity;
	
	@ManyToMany
	private List<Order> ord=new ArrayList<>();
	
	public int getId() {
		return iqid;
	}
	public void setId(int iqid) {
		this.iqid = iqid;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
