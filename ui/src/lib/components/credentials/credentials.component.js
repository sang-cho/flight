import styles from './credentials.styles'
import templateUrl from './credentials.template'

const controller = class {
  styles = styles
  constructor (userstatusservice) {
    this.userstatusservice = userstatusservice
  }
}

export const credentials = {
  templateUrl,
  controller,
  controllerAs: 'credentials'
}
