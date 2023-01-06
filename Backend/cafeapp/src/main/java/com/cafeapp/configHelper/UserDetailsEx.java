package com.cafeapp.configHelper;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserDetailsEx extends UserDetails{
	public String getEmail();
}
