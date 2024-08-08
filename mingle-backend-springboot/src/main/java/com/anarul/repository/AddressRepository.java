package com.anarul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarul.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
