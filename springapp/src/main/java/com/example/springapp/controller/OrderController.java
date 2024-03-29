package com.example.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.Order;
import com.example.springapp.model.UserModel;
import com.example.springapp.Repository.OrderModelRepository;
import com.example.springapp.model.OrderItems;
import com.example.springapp.model.ProductModel;
import com.example.springapp.Repository.ProductRepo;
@CrossOrigin("*")
@RestController
public class OrderController { 
    @Autowired
	public OrderModelRepository OrderRepository;
    @Autowired
	public ProductRepo productRepo;

@GetMapping("/orders")
	public List<Order> getUserProducts(@RequestParam("userId") String userId) {
      List<Order> orders=OrderRepository.findByUserId(userId);      
       return orders;  
   }
	
@GetMapping("/admin/orders")
public List<Order> getAllOrder() {
	return OrderRepository.findAll();
}
	
@PostMapping("/saveOrders")
 public String placeOrder(@RequestBody Order order)
 {
	double tPrice=0.0;
	for(OrderItems orderItems: order.getOrderItems()) {
		tPrice+=Double.valueOf(orderItems.getPrice());
		ProductModel prod=productRepo.findByProductName(orderItems.getProductName());
		prod.setQuantity(String.valueOf(Integer.parseInt(prod.getQuantity())-(orderItems.getQuantity())));
		productRepo.save(prod);
	}
	order.setTotalPrice(String.valueOf(tPrice));
	 OrderRepository.save(order);

    return "cart items sent to orders" ;
}
@GetMapping("/admin/order")
public List<Order> getAllOrders() {
	return OrderRepository.findAll();
}
@GetMapping("/admin/order/{id}")
public List<Order> getAllOrdersById(@RequestParam String id ) {
	return OrderRepository.findAll();
}
@GetMapping("/orders/{id}")
public Order getOrderById(@PathVariable String id)
{
	Order order= OrderRepository.findById(Long.parseLong(id)).orElse(null);
	return order;
}
}
