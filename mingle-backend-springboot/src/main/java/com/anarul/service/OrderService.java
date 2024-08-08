package com.anarul.service;

import java.util.List;

import com.stripe.exception.StripeException;
import com.anarul.Exception.CartException;
import com.anarul.Exception.OrderException;
import com.anarul.Exception.RestaurantException;
import com.anarul.Exception.UserException;
import com.anarul.model.Order;
import com.anarul.model.PaymentResponse;
import com.anarul.model.User;
import com.anarul.request.CreateOrderRequest;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;
	 

}
