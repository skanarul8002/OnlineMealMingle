package com.anarul.dto;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.List;

@Data
@Embeddable
public class RestaurantDto {

	private String title;

	private List<String> images;

	private String description;
	private Long id;}


