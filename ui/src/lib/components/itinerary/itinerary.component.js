import styles from './itinerary.styles'
import templateUrl from './itinerary.template'

const controller = class {
  styles = styles
  savedItinerary
  displayMapBoolean = false
  constructor (flightsmanagerservice, userstatusservice, dataservice) {
    this.flightsmanagerservice = flightsmanagerservice
    this.userstatusservice = userstatusservice
    this.dataservice = dataservice
    this.parseItinerary()
  }

  flipMap () {
    if (this.displayMapBoolean === false) {
      this.displayMapBoolean = true
    } else {
      this.displayMapBoolean = false
    }
  }

  book () {
    this.dataservice.bookFlight(this.savedItinerary, this.userstatusservice.credentials.username, this.userstatusservice.credentials.password)
  }

  parseItinerary () {
    let temp = this.flightsmanagerservice.savedItinerary
    this.savedItinerary = this.flightsmanagerservice.savedItinerary
    this.savedItinerary.pop()
  }

}

export const itinerary = {
  templateUrl,
  controller,
  controllerAs: 'itinerary'
}
