package com.anarul.service;

import java.util.List;

import com.anarul.model.Notification;
import com.anarul.model.Order;
import com.anarul.model.Restaurant;
import com.anarul.model.User;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
