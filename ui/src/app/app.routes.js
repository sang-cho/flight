export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: 'allflights'
    })
    .state({
      name: 'history',
      url: '/history',
      component: 'history'
    })
    .state({
      name: 'login',
      url: '/login',
      component: 'credentials'
    })


  }
