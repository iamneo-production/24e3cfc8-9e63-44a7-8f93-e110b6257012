package com.examly.springapp.model;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
@Entity
@Table(name="OrderItems")
public class OrderItems {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemsId;
	private String productName;
	private int quantity;
	private String price;
	public OrderItems() {
		
	}
	public OrderItems(long orderItemsId, String productName, int quantity, String price) {
		this.orderItemsId = orderItemsId;
		this.productName = productName;
		this.quantity = quantity;
		this.price = price;
	}
	public long getOrderItemsId() {
		return orderItemsId;
	}
	public void setOrderItemsId(long orderItemsId) {
		this.orderItemsId = orderItemsId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

}