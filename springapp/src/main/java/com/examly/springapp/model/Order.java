package com.examly.springapp.model;


import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="Orders")
public class Order {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderId;
	private String userId;
	private String totalPrice;
	@OneToMany(targetEntity=OrderItems.class,cascade=CascadeType.ALL)
	@JoinColumn(name="order_Id",referencedColumnName="orderId")
	List<OrderItems> orderItems;
	private String status;
	public Order() {
	}
	public Order(long orderId, String userId, String totalPrice, List<OrderItems> orderItems,String status) {
		this.orderId = orderId;
		this.userId = userId;
		this.totalPrice = totalPrice;
		this.orderItems = orderItems;
		this.status = status;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}
	public List<OrderItems> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(List<OrderItems> orderItems) {
		this.orderItems = orderItems;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}	
 
}