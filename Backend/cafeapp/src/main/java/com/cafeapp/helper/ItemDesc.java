package com.cafeapp.helper;

import java.util.List;

public class ItemDesc extends CustomerInfo {
	private int tb_no;
	private List<Item_Quantity> items;
	public int getTb_no() {
		return tb_no;
	}
	public void setTb_no(int tb_no) {
		this.tb_no = tb_no;
	}
	public List<Item_Quantity> getItems() {
		return items;
	}
	public void setItems(List<Item_Quantity> items) {
		this.items = items;
	}
	
	
	
}
