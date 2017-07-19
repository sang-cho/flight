import styles from './create-user.styles'
import templateUrl from './create-user.template'

const controller = class {
  styles = styles
  username = ''
  password = ''
  constructor ($state, userstatusservice, dataservice) {
    this.$state = $state
    this.dataservice = dataservice
    this.userstatusservice = userstatusservice
  }

  goToFlights () {
    this.$state.go('home')
  }

  makeUser () {
    return {
      id: 0,
      username: this.username,
      password: this.password
    }
  }

  makeCredentials () {
    return {
      username: this.username,
      password: this.password
    }
  }

  createUser () {
    this.dataservice.createUser(this.makeUser())
    .then((response) => {
      if (response !== undefined) {
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

export const createUser = {
  templateUrl,
  controller,
  controllerAs: 'createUser'
}
