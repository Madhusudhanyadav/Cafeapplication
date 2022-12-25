package com.cafeapp.helper;

public class CustomerInfo {
	private String c_name;
	private String phno;
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getPhno() {
		return phno;
	}
	public void setPhno(String phno) {
		this.phno = phno;
	}
	public CustomerInfo(String c_name, String phno) {
		super();
		this.c_name = c_name;
		this.phno = phno;
	}
	public CustomerInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
