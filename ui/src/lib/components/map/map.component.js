import templateUrl from './map.template.html'

/* @ngInject */
const controller = class {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor (mapservice) {
    this.mapservice = mapservice

    // add markers from an angular constant
    const { memphis, nashville, knoxville } = {
      memphis: {
        latitude: 35.1495,
        longitude: -90.0490
      },

      nashville: {
        latitude: 36.1627,
        longitude: -86.7816
      },

      knoxville: {
        latitude: 35.9606,
        longitude: -83.9207
      }
    }
    const markers = [memphis, nashville, knoxville]

    markers.forEach(marker => this.addMarker(marker))

    // add paths manually
    const paths = [
      [memphis, nashville, '#CC0099'],
      [nashville, knoxville, '#AA1100']
    ]

    paths.forEach(args => this.addPath(...args))

    // add path from webservice
    mapservice.getMarkerByCityName('Chattanooga')
      .then(chattanooga => {
        this.addPath(knoxville, chattanooga, '#FF3388')
      })
  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

}

export const map = {
  templateUrl,
  controller,
  controllerAs: '$mapCtrl'
}
