package com.cafeapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="image")
public class Image {
	@Id
	private int id;
	private String url;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Image(int id, String url) {
		super();
		this.id = id;
		this.url = url;
	}
	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
