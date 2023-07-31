package com.example.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.UserModel;

public interface userRepo extends JpaRepository<UserModel, String> {

}
