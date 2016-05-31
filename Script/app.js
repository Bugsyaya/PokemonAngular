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
    // template: '<div class="col-md-12">Fetching list.<br><div ui-view></div></div>'
    template: '<div class="col-md-12">Listsqdfqsdf<br>{{pokemons}}<h1 ng-repeat="pokemon in pokemons.$object">{{pokemon.name}}</h1><div ui-view></div></div>'
  })
});
