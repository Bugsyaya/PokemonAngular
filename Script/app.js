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
    template: '<div class="col-md-3 portfolio-item" ui-view  ng-repeat="pokemon in pokemons"><h1>{{pokemon.name}}</h1><a href="#"><img class="img-responsive" src="http://pokeapi.co/media/img/1.png" alt=""></a></div>'
  })
});
