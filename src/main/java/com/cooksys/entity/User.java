package com.cooksys.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Profile")
public class User {

    @Id
    @GeneratedValue
    private long id;
    
    @Column(unique = true, nullable = false)
    private String username;

    private String password;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "author")
    private List<Route> bookedRoutes;

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public List<Route> getBookedRoutes() {
		return bookedRoutes;
	}

	public void setBookedRoutes(List<Route> bookedRoutes) {
		this.bookedRoutes = bookedRoutes;
	}
    
}
