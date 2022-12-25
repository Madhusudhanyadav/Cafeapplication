package com.cafeapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafeapp.entities.Image;

public interface ImageRepo extends JpaRepository<Image, Integer>{

}
