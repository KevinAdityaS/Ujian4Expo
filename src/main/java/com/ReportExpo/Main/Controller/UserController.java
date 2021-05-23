package com.ReportExpo.Main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/name/{value}")
	public User getByName(@PathVariable ("value") String value) {
		
		return userRepository.findByName(value);
		
	}
	
	@PostMapping("/addUser")
	public String addUser(@RequestBody User user) {
		
		userRepository.save(user);
		return "Insert Successfully!";
		
	}
	
}