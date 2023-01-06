package com.cafeapp.config;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.UserDetails;

import com.cafeapp.configHelper.UserDetailsEx;
import com.cafeapp.entities.Admin;


public class UserDetailsImpl implements UserDetailsEx{

	
	
	public Admin admin;
	
	
	public UserDetailsImpl(Admin admin) {
		super();
		this.admin = admin;
	}

	
	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return admin.getPwd();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
//		return "Madhusudhan";
		return admin.getName();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}


}
