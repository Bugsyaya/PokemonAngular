app.service("service",['Restangular',
function(Restangular)
{

  this.getMany = function()
  {
    var url = "https://pokeapi.co/api/v2/pokemon";
    var singleSearch = Restangular.oneUrl('betaSearch', url);

    this.message = singleSearch.get().then(function(response){
      return response.message;
    })

  };

  this.getOne = function(key)
  {
    var url = "https://pokeapi.co/api/v2/pokemon/" + key;
    var singleSearch = Restangular.oneUrl('betaSearch', url);

    this.message = singleSearch.get().then(function(response){
      return response.message;
    })
  }

}]
);
