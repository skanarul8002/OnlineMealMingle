package com.anarul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
