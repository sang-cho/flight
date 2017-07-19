import * as vis from 'ui-router-visualizer'

export const run =
  /* @ngInject */
  ($uiRouter) => {
    vis.visualizer($uiRouter)
  }
