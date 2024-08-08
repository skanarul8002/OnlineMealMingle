package com.anarul.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.Events;

public interface EventRepository extends JpaRepository<Events, Long>{

	public List<Events> findEventsByRestaurantId(Long id);
}
