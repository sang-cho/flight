package com.cooksys.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.FlightBookable;
import com.cooksys.entity.Route;
import com.cooksys.entity.User;
import com.cooksys.service.RoutingService;
import com.cooksys.service.UserService;


@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
	
	@Autowired
    private UserService userService;
	
    @Autowired
    private RoutingService routingService;
  

    @RequestMapping(method = RequestMethod.GET, value = "/login")
    public boolean login(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletResponse httpResponse) {
        httpResponse.setStatus(HttpServletResponse.SC_OK);
        return userService.login(username, password);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public User post(@RequestBody User user, HttpServletResponse httpResponse) {
        User output = userService.post(user);
        if (output != null) {
            httpResponse.setStatus(HttpServletResponse.SC_CREATED);
            return output;
        } else {
            httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/route/save")
    public boolean bookFlight(@RequestBody List<FlightBookable> flights, @RequestParam("username") String username, @RequestParam("password") String password, HttpServletResponse response) {
        return routingService.postRoute(flights, username, password);
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/route/all")
    public List<Route> getSavedRoutes(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletResponse httpResponse) {
        List<Route> output = routingService.getRoutes(username, password);
        if (output != null) {
            httpResponse.setStatus(HttpServletResponse.SC_CREATED);
            return output;
        } else {
            httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }
    }
}
