package com.anarul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
