//package com.cafeapp.jwtTokenValidation;
//
//import java.io.IOException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.cafeapp.config.UserDetailsServiceImpl;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class AuthenticationFilter extends OncePerRequestFilter {
//
//
//	@Autowired
//	private UserDetailsServiceImpl userDetailsServiceImpl;
//	
//	
//	@Autowired
//	private JwtUtil jwtUtil;
//	
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		
//		// getJwt
//		// bearer
//		// validate
//		
//		String requestTokenHeader = request.getHeader("Authorization");
//		String username = null;
//		String token = null;
//		
//		if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
//			token = requestTokenHeader.substring(7);
//			System.out.println(token);
//			try {
//				username = jwtUtil.extractUsername(token);
//			}
//			catch(Exception e) {
//				e.printStackTrace();
//			}
////			UserDetailsServiceImpl userD = new UserDetailsServiceImpl();
//			UserDetails userDetails =  userDetailsServiceImpl.loadUserByUsername(username);
//			
//			//  SECURITY
//			if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
//				
//				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//				
//				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//			}
//			else {
//				System.out.println("Token is not validated");
//			}
//			System.out.println("success");
//			filterChain.doFilter(request, response);
//		}
//	}
//
//}
