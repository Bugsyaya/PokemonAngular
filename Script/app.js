var app = angular.module("myApp", ['ui.router','restangular']);


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/list');

  $stateProvider
    .state('list', {
      url: '/list',

      resolve: {
          pokemons: ['service',function(service) {
            return service.getMany();
          }],
      },
      controller: 'myCtrl',
    template: '<div class="col-md-12">List of pokemons<br><h1 ng-repeat="pokemon in pokemons">{{pokemon.name}}</h1><div ui-view></div></div>'
  })
  .state('list.details', {
    url: '/list/:id',

    resolve: {
        pokemon: ['service',function(service) {
          return service.getOne();
        }],
    },
    controller: 'myCtrl',
  template: '<div class="col-md-12">Details of pokemon<br><h1 ng-repeat="attr in pokemon.$object">{{attr}}</h1><div ui-view></div></div>'
})
});
