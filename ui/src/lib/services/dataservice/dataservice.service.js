export const dataservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = 'localhost:8000'
  }

  getFlights () {
    return this.$http.get(`http://${this.ipAddress}/flights`)
    .then((response) => {
      return response.data
    }, (error) => {
      console.log('failed getFlights', error.data)
    })
  }

  login (credentials) {
    return this.$http.get(`http://${this.ipAddress}/user/login?username=${credentials.username}&password=${credentials.password}`)
    .then((response) => {
      console.log('success login', response.data)
      return response.data
    }, (error) => {
      console.log('failed login', error.data)
    })
  }

  createUser (user) {
    return this.$http.post(`http://${this.ipAddress}/user/create`, user)
    .then((response) => {
      console.log('success user created', response.data)
      return response.data
    }, (error) => {
      console.log('failed user created', error.data)
    })
  }

  bookFlight (flightArray, username, password) {
    return this.$http.post(`http://${this.ipAddress}/user/route/save?username=${username}&password=${password}`, flightArray)
    .then((response) => {
      console.log('success booking', response.data)
      return response.data
    }, (error) => {
      console.log('failed booking', error.data)
    })
  }

  getUsersRoutes (username, password) {
    return this.$http.get(`http://${this.ipAddress}/user/route/all?username=${username}&password=${password}`)
    .then((response) => {
      console.log('success login', response.data)
      return response.data
    }, (error) => {
      console.log('failed login', error.data)
    })
  }
}
