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
    template: '<div class="col-md-2 portfolio-item seeNamePic" ui-view  ng-repeat="pokemon in pokemons"><h1>{{pokemon.name}}</h1><img class="img-responsive col-md-6" src="http://pokeapi.co/media/sprites/pokemon/back/1.png" alt=""><img class="img-responsive col-md-6" src="http://pokeapi.co/media/sprites/pokemon/1.png" alt=""><img class="img-responsive col-md-6" src="http://pokeapi.co/media/sprites/pokemon/back/shiny/1.png" alt=""><img class="img-responsive col-md-6" src="http://pokeapi.co/media/sprites/pokemon/shiny/1.png" alt=""></div>'
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
  .state('list.type', {
       url: "/contacts/:typeId",
       resolve: {
         types: ['service', function(service){
           return service.getType();
         }]
       },
       controller: 'myCtrlType',
       template: '{{type.name}}'
   })
});
