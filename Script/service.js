app.service("service",['Restangular',
function(Restangular)
{

  //
  this.getMany = function()
  {
    var url = "https://pokeapi.co/api/v2/pokemon-species?limit=800";
    var singleSearch = Restangular.oneUrl('betaSearch', url);

    return singleSearch.get().then(function(response){
      list = [];

      response.results.forEach(item => {
        var pokemon = {
          name: item.name,
          id: item.url.split('/')[6]
        }
        list.push(pokemon)
        });
      return list;
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
