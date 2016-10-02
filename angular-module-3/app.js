(function(){
  "use strict"
  var module = angular.module("NarrowItDownApp", []);
  module.controller("NarrowItDownController", NarrowItDownController );
  module.service("MenuSearchService", MenuSearchService);
  module.constant("ApiBasePath",  "https://davids-restaurant.herokuapp.com");
  module.directive("foundItem", FoundItem);

  NarrowItDownController.$inject = ["MenuSearchService", "$filter"];

  function NarrowItDownController(MenuSearchService, $filter){
    var narrowCtrl = this;
    narrowCtrl.narrow = function(){
      MenuSearchService.getMatchedMenuItems()
      .then(function(response){
        narrowCtrl.found = filterDown(response.data.menu_items);
      })
      .catch(function(error){
        console.log(error);
      })
    };

    function filterDown(array){
      if(narrowCtrl.searchTerm){
        return $filter("filter")(array, {description:narrowCtrl.searchTerm});
      }else{
        narrowCtrl.message = "Nothing found!";
        return [];
      }
    };

    narrowCtrl.remove = function(index){
      return narrowCtrl.found.splice(index, 1);
    }
  };


  MenuSearchService.$inject = ["$http","ApiBasePath"];
  function MenuSearchService($http, ApiBasePath){
    var service = this;
    var items = [];
    service.getMatchedMenuItems = function(){
        return  $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
          });

    }
  };

  function FoundItem(){
    var ddo = {
      templateUrl: "foundItem.html",
      scope:{
        foundItems : "<",
        onRemove : "&"
      }
    }
    return ddo;
  };
})();
