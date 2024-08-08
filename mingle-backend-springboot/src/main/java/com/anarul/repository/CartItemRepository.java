package com.anarul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByFoodIsContaining

}
