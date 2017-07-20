import templateUrl from './themap.template.html'

/* @ngInject */
const controller = class {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor (mapservice) {
    this.mapservice = mapservice
    const { memphis, nashville, knoxville, chattanooga } = {
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
      },

      chattanooga: {
        latitude: 35.0457,
        longitude: -85.3096
      }
    }

    const citiesWithName = [
      {
        city: 'memphis',
        latitude: 35.1495,
        longitude: -90.0490
      },
      {
        city: 'nashville',
        latitude: 36.1627,
        longitude: -86.7816
      },
      {
        city: 'knoxville',
        latitude: 35.9606,
        longitude: -83.9207
      },
      {
        city: 'chattanooga',
        latitude: 35.0457,
        longitude: -85.3096
      },
    ]

    const innerMarkers = [memphis, nashville, knoxville, chattanooga]

    innerMarkers.forEach(marker => this.addMarker(marker))

    const paths = this.makePaths(citiesWithName)

    paths.forEach(args => this.addPath(...args))
  }

  makePaths (citiesWithName) {
    const colors = ['#1abc9c', '#e74c3c', '#2ecc71', '#f1c40f', '#2c3e50']
    let paths = []
    for (var i = 0; i < this.itinerary.length; i++) {
      let route = []
      let origin = this.itinerary[i].origin
      let destination = this.itinerary[i].destination
      citiesWithName.forEach((cityObj) => {
        if (cityObj.city.toLowerCase() === origin.toLowerCase()) {
          route.unshift(cityObj)
        } else if (cityObj.city.toLowerCase() === destination.toLowerCase()) {
          route.push(cityObj)
        }
      })
      route.push(colors[i])
      paths.push(route)
    }
    return paths
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

export const themap = {
  templateUrl,
  controller,
  bindings: {
    itinerary: '<'
  },
  controllerAs: '$themapCtrl'
}
