package com.example.springapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.ProductModel;

public interface ProductRepo extends JpaRepository<ProductModel, Integer>{
        public ProductModel findByProductName(String productName);
}
