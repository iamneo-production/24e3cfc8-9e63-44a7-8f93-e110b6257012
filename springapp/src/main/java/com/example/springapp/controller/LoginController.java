package com.examly.springapp.controller;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.Repository.userRepo;

@RestController
@CrossOrigin("*")
public class LoginController {
	@Autowired
	userRepo repo;
	@PostMapping("/login")
	public boolean checkUser(@RequestBody LoginModel data)
	{
		UserModel user=repo.findById(data.getEmail()).orElse(null);
		UserModel user1=new UserModel();
		System.out.println(data.getPassword());
		System.out.print(user.getPassword());
		if(user != null && user.getPassword().equals(data.getPassword()))
		{
			return true;
		}
		return false;
		
	}

}