package com.anarul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
