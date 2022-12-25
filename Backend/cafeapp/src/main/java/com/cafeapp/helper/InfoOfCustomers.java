package com.cafeapp.helper;


import java.util.Date;
import java.util.List;

public class InfoOfCustomers extends CustomerInfo{
	private long c_id;
	private int ord_id;
	private List<OrderList> orderList;
	private int amount;
	private String status;
	private Date date;
	
	
	public long getC_id() {
		return c_id;
		
	}
	public void setC_id(long c_id) {
		this.c_id = c_id;
	}
	
	public List<OrderList> getOrderList() {
		return orderList;
	}
	public void setOrderList(List<OrderList> orderList) {
		this.orderList = orderList;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getOrd_id() {
		return ord_id;
	}
	public void setOrd_id(int ord_id) {
		this.ord_id = ord_id;
	}


}
