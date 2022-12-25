package com.cafeapp.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;



import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class Order{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ord_no;
	
	private int amount;
	private String status;
	private Date date;
	private double total;
	

	@OneToOne(mappedBy = "order")
	private Customer customer;
	
	@ManyToMany
	private List<Item> litems=new ArrayList<>();
//	@ManyToMany
//	private List<ItemQuantityEntity> l_quan=new ArrayList<>();
	
	@ManyToMany
	private List<ItemQuantity> l_quan=new ArrayList<>();
	
	@ManyToMany
	private List<Admin> l_admin=new ArrayList<>();

	

	public Order(int ord_no, int amount, String status, Customer customer, List<Item> litems, List<ItemQuantity> l_quan,
			List<Admin> l_admin) {
		super();
		this.ord_no = ord_no;
		this.amount = amount;
		this.status = status;
		this.customer = customer;
		this.litems = litems;
		this.l_quan = l_quan;
		this.l_admin = l_admin;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Item> getLitems() {
		return litems;
	}

	public void setLitems(List<Item> litems) {
		this.litems = litems;
	}



	public int getOrd_no() {
		return ord_no;
	}

	public void setOrd_no(int ord_no) {
		this.ord_no = ord_no;
	}


	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public List<ItemQuantity> getL_quan() {
		return l_quan;
	}

	public void setL_quan(List<ItemQuantity> l_quan) {
		this.l_quan = l_quan;
	}

	public List<Admin> getL_admin() {
		return l_admin;
	}

	public void setL_admin(List<Admin> l_admin) {
		this.l_admin = l_admin;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}
}
