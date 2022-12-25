package com.cafeapp.helper;



public class OrderList {
	private String item_name;
	private int quantity;
	private double price;
	
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public OrderList(String item_name, int quantity) {
		super();
		this.item_name = item_name;
		this.quantity = quantity;
	}
	public OrderList() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
