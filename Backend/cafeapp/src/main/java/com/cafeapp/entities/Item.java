package com.cafeapp.entities;

import java.util.ArrayList;

import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import jakarta.persistence.Table;

@Entity
@Table(name="Item")
public class Item {
	@Id
	private int id;
	private String name;
	
	@Column(columnDefinition = "double default 25")
	private double price;
	private String image;
	
	@Column(columnDefinition= "double default 5")
	private double gst;
	
	@ManyToMany
	private List<Order> order_list=new ArrayList<>();
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public double getPrice() {
		return price;
	}
	
	
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
	public List<Order> getOrder_list() {
		return order_list;
	}
	public void setOrder_list(List<Order> order_list) {
		this.order_list = order_list;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getGst() {
		return gst;
	}
	public void setGst(double gst) {
		this.gst = gst;
	}
	public Item(int id, String name, double price, String image, List<Order> order_list) {
		super();
		this.id = id;
		
		this.name = name;
		this.price = price;
		this.image = image;
		this.order_list = order_list;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
