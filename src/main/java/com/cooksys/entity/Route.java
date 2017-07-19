
package com.cooksys.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Route {
	@Id
    @GeneratedValue
    private long id;
	
	@JsonBackReference
	@ManyToOne
	private User author;
	
	@JsonManagedReference
	@OneToMany(mappedBy="route")
	private List<FlightBookable> flights;

	public Route() {}
	
	
	
	public Route(User author, List<FlightBookable> flights) {
		super();
		this.author = author;
		this.flights = flights;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}

	public List<FlightBookable> getFlights() {
		return flights;
	}

	public void setFlights(List<FlightBookable> flights) {
		this.flights = flights;
	}
	
}
