export const userstatusservice = class {
  constructor () {
    this.credentials = {
      username: '',
      password: ''
    }
    this.isLoggedIn = false
  }

  logIn (credentials) {
    this.credentials = credentials
    this.isLoggedIn = true
  }

  logOut () {
    this.credentials = {
      username: '',
      password: ''
    }
    this.isLoggedIn = false
    console.log('logged out')
  }
}
