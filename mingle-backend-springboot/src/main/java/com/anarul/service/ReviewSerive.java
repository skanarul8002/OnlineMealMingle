package com.anarul.service;

import java.util.List;

import com.anarul.Exception.ReviewException;
import com.anarul.model.Review;
import com.anarul.model.User;
import com.anarul.request.ReviewRequest;

public interface ReviewSerive {
	
    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
