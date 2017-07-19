package com.cooksys.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class FlightBookable {
	
	@Id
    @GeneratedValue
    private long id;
	
	@Column(nullable = false)
	private String origin;
	
	@Column(nullable = false)
	private String destination;
	
	@Column(nullable = false)
	private long flightTime;
	
	@Column(nullable = false, name="elapsedTime")
	private long offset;
	
	@JsonBackReference
	@ManyToOne
	private Route route;
	
	public FlightBookable() {}
	
	public FlightBookable(String origin, String destination, long flightTime, long offset) {
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.offset = offset;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public long getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}

	public long getOffset() {
		return offset;
	}

	public void setOffset(long offset) {
		this.offset = offset;
	}

	public Route getRoute() {
		return route;
	}

	public void setRoute(Route route) {
		this.route = route;
	}
	
}
