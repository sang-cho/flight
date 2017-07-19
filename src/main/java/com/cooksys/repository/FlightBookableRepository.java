package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.FlightBookable;
import com.cooksys.entity.Location;

@Repository
public interface FlightBookableRepository extends JpaRepository<FlightBookable, Long> {

}
