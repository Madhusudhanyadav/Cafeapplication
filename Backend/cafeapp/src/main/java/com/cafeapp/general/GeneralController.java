package com.cafeapp.general;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cafeapp.entities.Contact;
import com.cafeapp.entities.Image;
import com.cafeapp.repo.ContactRepo;
import com.cafeapp.repo.ImageRepo;

@RestController
public class GeneralController {
	
	@Autowired
	ImageRepo imgRepo;
	
	@Autowired
	ContactRepo contact_repo;
	
	@GetMapping("/home/get")
	public List<Image> getImagesOfHomepage(){
		
		return imgRepo.findAll();
		
		
	}
	
	@PostMapping("/home/post/feedback")
	public String postFeedback(@RequestBody Contact contact) {
		contact_repo.save(contact);
		return "success";
	}
	
	
}

