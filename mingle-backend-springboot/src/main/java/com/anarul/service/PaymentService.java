package com.anarul.service;

import com.stripe.exception.StripeException;
import com.anarul.model.Order;
import com.anarul.model.PaymentResponse;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
