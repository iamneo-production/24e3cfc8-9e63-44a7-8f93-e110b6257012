package com.examly.springapp.controller;
import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.CartModel;
import com.examly.springapp.repo.CartModelRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class CartController {
	
	@Autowired
	private CartModelRepo repo;
	
	 List<CartModel> cartItems = new ArrayList<>();
	
	@PostMapping("/addcart")
	public String addToCart(@RequestBody CartModel payload)
	{
		repo.save(payload);
		
		return "product added to cart";
	}
	
	@GetMapping("/cart/{userId}")
	
    public List<CartModel> getUserCartItems(@PathVariable("userId") String userId) {
    	
    	List<CartModel> userCartItems = new ArrayList<>();
    	List<CartModel> carts = repo.findAll();
    	
    	for (CartModel cartItem : carts) {
            if (cartItem.getUserId().equals(userId)) {
                userCartItems.add(cartItem);
            }
        }
    	return userCartItems;
    }
    
    @DeleteMapping("/cart/delete/{id}")
	public String productDelete(@PathVariable("id") Long id)
	{
		repo.deleteById(id);
		return "cart item deleted";
	}
    
//    delete cart after order get placed
    @DeleteMapping("/cart/deleteCart/{userId}")
	public String deleteCart(@PathVariable("userId") String userId)
	{
//		repo.deleteById(userId);
//		return "cart item deleted";
    	List<CartModel> carts = repo.findAll();
    	
    	for (CartModel cartItem : carts) {
            if (cartItem.getUserId().equals(userId)) {
            	repo.deleteById(cartItem.getCartItemID());
            }
        
	}
    	return "carts deleted";
    
	}
}
