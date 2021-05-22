package com.ReportExpo.Main.Repository;

import org.springframework.data.repository.CrudRepository;

import com.ReportExpo.Main.Entity.User;

public interface UserRepository extends CrudRepository<User, Long>{

	public User findByIdUser(Long id);
	public User findByName(String name);
	
}
