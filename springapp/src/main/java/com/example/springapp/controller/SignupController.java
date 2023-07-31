package  com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.Repository.userRepo;

@CrossOrigin("*")
@RestController
public class SignupController {
	@Autowired
	public userRepo repo;
	@PostMapping("/signup")
	public boolean saveUser(@RequestBody UserModel user)
	{
		repo.save(user);
		if (user.getUserName() != null) {
	        return true;
	    } else {
	    	return false;
	    }
	}
	
	@GetMapping("/getuser/{email}")
	public UserModel getuser(@PathVariable String email)
	{	
		UserModel user=repo.findById(email).orElse(null);
		return user;
	}

}
