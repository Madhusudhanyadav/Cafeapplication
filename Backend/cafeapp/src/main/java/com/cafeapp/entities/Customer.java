package com.cafeapp.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	
	private int tb_no;
	private String name;
	private String phno;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Orders_id")
	private Order order;
	
	
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public Order getOrder() {
		return order;
	}



	public void setOrder(Order order) {
		this.order = order;
	}
	

	public int getTb_no() {
		return tb_no;
	}



	public void setTb_no(int tb_no) {
		this.tb_no = tb_no;
	}

	
	public String getPhno() {
		return phno;
	}



	public void setPhno(String phno) {
		this.phno = phno;
	}



	public Customer(int id,int tb_no, String name, Order order,String phno) {
		super();
		this.id = id;
		this.tb_no=tb_no;
		this.name = name;
		this.order = order;
		this.phno=phno;
	}



}
