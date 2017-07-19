/* @ngInject */
export const mapservice = class {
  apiUrl = 'http://localhost:8000'
  constructor ($http) {
    this.$http = $http
  }

  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }

  getLocations () {
    return this.$http
    .get(`${this.apiUrl}/location`)
    .then(result => result.data)
  }
}
