import styles from './allflights.styles'
import templateUrl from './allflights.template'

const controller = class {
  styles = styles
  constructor () {}
}

export const allflights = {
  templateUrl,
  controller,
  controllerAs: 'allflights'
}
