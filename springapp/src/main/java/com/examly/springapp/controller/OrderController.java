package com.examly.springapp.controller;
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
import com.examly.springapp.model.Order;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.Repository.OrderModelRepository;
import com.examly.springapp.Repository.ProductRepo;
import com.examly.springapp.model.OrderItems;
import com.examly.springapp.model.ProductModel;

@CrossOrigin("*")
@RestController
public class OrderController { 
    @Autowired
	public OrderModelRepository OrderRepository;
	@Autowired
	public ProductRepo repo;


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
		tPrice+=Double.valueOf(Integer.parseInt(orderItems.getPrice())*(orderItems.getQuantity()));
		ProductModel product = repo.findByProductName(orderItems.getProductName());
		product.setQuantity(String.valueOf(Integer.parseInt(product.getQuantity())-orderItems.getQuantity()));
		repo.save(product);
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