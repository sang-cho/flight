import styles from './direct.styles'
import templateUrl from './direct.template'

const controller = class {
  styles = styles
  constructor (flightsmanagerservice) {
    this.flightsmanagerservice = flightsmanagerservice
  }
}

export const direct = {
  templateUrl,
  controller,
  controllerAs: 'direct'
}
