package main.java.com.examly.springapp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Order;


@Repository
public interface OrderModelRepository extends JpaRepository<Order,Long> {

    List<Order> findByUserId(String userid);
}