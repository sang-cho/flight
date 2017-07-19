package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.FlightBookable;
import com.cooksys.entity.Route;
import com.cooksys.entity.User;
import com.cooksys.repository.FlightBookableRepository;
import com.cooksys.repository.RouteRepository;
import com.cooksys.repository.UserRepository;

@Service
public class RoutingService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private FlightBookableRepository flightBookableRepository;
    
    @Autowired
    private RouteRepository routeRepository;

	public boolean postRoute(List<FlightBookable> flights, String username, String password) {
		User user = userRepository.findByUsernameAndPassword(username, password);
		List<Long> flightIds = new ArrayList<>(); 
		if (user != null) {
			flights.forEach(flight-> flightIds.add(flightBookableRepository.saveAndFlush(flight).getId()));
		}
		List<FlightBookable> bookable = new ArrayList<>();
		flightIds.forEach(id-> bookable.add(flightBookableRepository.getOne(id)));
		Route newRoute = new Route();
		newRoute.setAuthor(user);
		newRoute.setFlights(bookable);
		Long id = routeRepository.saveAndFlush(newRoute).getId();
		bookable.forEach(flight-> flight.setRoute(newRoute));
		bookable.forEach(flight-> flightBookableRepository.save(flight));
		return true;
	}

	public List<Route> getRoutes(String username, String password) {
		User user = userRepository.findByUsernameAndPassword(username, password);
		return user.getBookedRoutes();
	}
    

    

}
