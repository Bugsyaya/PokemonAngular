
// Notre controller expose simplement le service a la vue
app.controller("myCtrl",  ['$scope','pokemons',function($scope,pokemons) {
  $scope.pokemons = pokemons;

}]);
