export const config =
  /* @ngInject */
  ($urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/home')
    $locationProvider.html5Mode(true)
  }
