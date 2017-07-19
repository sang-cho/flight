import styles from './history.styles'
import templateUrl from './history.template'

const controller = class {
  styles = styles
  routes = []
  constructor ($state, userstatusservice, dataservice) {
    this.$state = $state
    this.userstatusservice = userstatusservice
    this.dataservice = dataservice
    this.getRoutes()
  }

  getRoutes () {
    this.dataservice.getUsersRoutes(this.userstatusservice.credentials.username, this.userstatusservice.credentials.password)
    .then((routes) => {
      this.routes = routes
    })
  }

}

export const history = {
  templateUrl,
  controller,
  controllerAs: 'history'
}
