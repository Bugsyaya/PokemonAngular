
// Notre controller expose simplement le service a la vue
app.controller("myCtrl",  ['$scope','pokemons',function($scope,pokemons) {
  $scope.pokemons = pokemons;
}]);

app.controller("myCtrlType",  ['$scope','types',function($scope,types) {
  $scope.types = types;
}]);
