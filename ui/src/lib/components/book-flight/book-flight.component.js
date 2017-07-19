import styles from './book-flight.styles'
import templateUrl from './book-flight.template'

const controller = class {
  styles = styles
  constructor ($state, userstatusservice, dataservice) {
    this.$state = $state
    this.userstatusservice = userstatusservice
    this.dataservice = dataservice
  }

  goToLogin () {
    this.$state.go('login')
  }

  book () {
    let outarray = []
    outarray.push(this.flight)
    this.dataservice.bookFlight(outarray, this.userstatusservice.credentials.username, this.userstatusservice.credentials.password)
  }

}

export const bookFlight = {
  templateUrl,
  controller,
  bindings: {
    flight: '<'
  },
  controllerAs: 'bookFlight'
}
