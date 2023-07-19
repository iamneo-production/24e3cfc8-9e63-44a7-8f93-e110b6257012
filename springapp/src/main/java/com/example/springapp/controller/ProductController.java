package com.examly.springapp.controller;
import com.examly.springapp.Repository.ProductRepo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.examly.springapp.model.ProductModel;


@CrossOrigin("*")
@RestController
public class ProductController {
	@Autowired
	private ProductRepo repo;
	@GetMapping("/home")
	public List<ProductModel> getHomeProduct()
	{
		return repo.findAll();
	}
	@GetMapping("/admin")
	public List<ProductModel> getProduct()
	{
		return repo.findAll();
	}
	@GetMapping("/admin/delete/{id}")
	public String productDelete(@PathVariable Integer id)
	{
		repo.deleteById(id);
		return "deleted";
	}
	@PostMapping("/admin/addProduct")
	public String productSave(@RequestBody ProductModel data)
	{
		repo.save(data);
		
		return "product added";
	}
	
	@PutMapping("/api/update/{product_id}")
	public ProductModel updateProduct(@PathVariable("product_id") Integer product_id, @RequestBody ProductModel newProduct) {
		 ProductModel existingProduct = repo.findById(product_id)
	                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + product_id));
		 existingProduct.setImageUrl(newProduct.getImageUrl());
		 existingProduct.setProductName(newProduct.getProductName());
		 existingProduct.setPrice(newProduct.getPrice());
		 existingProduct.setQuantity(newProduct.getQuantity());
	        
	        
	     return repo.save(existingProduct);
	    }
		@GetMapping("/admin/product")
		public List<ProductModel> getAllProducts() {
			return repo.findAll();
		}
		@GetMapping("/admin/product/{id}")
		public List<ProductModel> getAllProductsById(@RequestParam String id ) {
			return repo.findAll();
		}
	
	
}