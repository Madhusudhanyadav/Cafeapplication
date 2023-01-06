package com.cafeapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.cafeapp.entities.Admin;
import com.cafeapp.repo.AdminRepo;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private AdminRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		Admin admin =repo.getAdminByEmail(email);	
		UserDetails user = new UserDetailsImpl(admin);
		return user;
	}
	
	

}
