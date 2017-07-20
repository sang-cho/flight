import styles from './connecting.styles'
import templateUrl from './connecting.template'

const controller = class {
  styles = styles
  origin = ''
  destination = ''
  constructor (flightsmanagerservice, userstatusservice, $state) {
    this.flightsmanagerservice = flightsmanagerservice
    this.userstatusservice = userstatusservice
    this.$state = $state
  }

  goToItinerary () {
    this.$state.go('itinerary')
  }

  goToLogin () {
    this.$state.go('login')
  }

  searchForRoute () {
    const route = this.flightsmanagerservice.setItinerary(this.destination.toUpperCase(), this.origin.toUpperCase())
    if (this.userstatusservice.isLoggedIn) {
      this.goToItinerary('itinerary')
    } else {
      console.log('log in!')
      this.goToLogin()
    }
  }
}

export const connecting = {
  templateUrl,
  controller,
  controllerAs: 'connecting'
}
