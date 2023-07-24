package com.examly.springapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.CartModel;

@Repository
public interface CartModelRepo extends JpaRepository<CartModel, Long> {
	
}
