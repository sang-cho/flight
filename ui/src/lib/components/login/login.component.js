import styles from './login.styles'
import templateUrl from './login.template'

const controller = class {
  styles = styles
  username = ''
  password = ''
  constructor (userstatusservice, dataservice, $state) {
    this.userstatusservice = userstatusservice
    this.dataservice = dataservice
    this.$state = $state
  }

  goToFlights() {
      this.$state.go('home')
  }

  makeCredentials () {
    return {
      id: 0,
      username: this.username,
      password: this.password
    }
  }

  login () {
    this.dataservice.login(this.makeCredentials())
    .then((response) => {
      if (response === true) {
        console.log('login success')
        this.userstatusservice.logIn(this.makeCredentials())
        this.goToFlights()
      } else {
        console.log('returned false, failed login')
        this.userstatusservice.logOut()
      }
    }, (error) => {
      console.log(error)
    })
  }
}

export const login = {
  templateUrl,
  controller,
  controllerAs: 'login'
}
