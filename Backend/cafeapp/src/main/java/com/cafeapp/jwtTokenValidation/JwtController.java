package com.cafeapp.jwtTokenValidation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cafeapp.entities.Admin;

@RestController
public class JwtController {
	
	
	@Autowired
	private UserDetailsService user;
	
	@Autowired
	private AuthenticationConfiguration authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@PostMapping("/post/login")
	public JwtResponse generateToken(@RequestBody Admin admin) {
		System.out.println(admin);
//		System.out.println(admin.getEmail());
		
		try {
			this.authenticationManager.getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(admin.getEmail(), admin.getPwd()));
			
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
		UserDetails userDetails = user.loadUserByUsername(admin.getEmail());
//		System.out.println(userDetails.getPassword());
		String token = this.jwtUtil.generateToken(userDetails);
		
		System.out.println(token);
		return new JwtResponse(token);
		
		
	}
}
