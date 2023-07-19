package com.examly.springapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.ProductModel;

public interface ProductRepo extends JpaRepository<ProductModel, Integer>{

}
