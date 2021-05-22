package com.ReportExpo.Main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ReportExpo.Main.Entity.User;
import com.ReportExpo.Main.Repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/")
	public List<User> getAll(){
		
		return (List<User>) userRepository.findAll();
		
	}
	
	@PostMapping("/addUser")
	public String addUser(@RequestBody User user) {
		
		userRepository.save(user);
		return "Insert Successfully!";
		
	}
	
}
