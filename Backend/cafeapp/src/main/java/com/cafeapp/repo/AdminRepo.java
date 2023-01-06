package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cafeapp.entities.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer>{
	
	@Query("Select a from Admin a where email = :email")
	public Admin getAdminByEmail(@Param("email") String email);
	
	@Query("Select a from Admin a where name = :name")
	public Admin getAdminByUsername(@Param("name") String name);
}
