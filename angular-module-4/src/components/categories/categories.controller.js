(function(){
  var module = angular.module("data");
  module.controller("CategoriesController", CategoriesController);


  CategoriesController.$inject = ['categories']

  function CategoriesController (categories) {
    var categoriesCtrl = this;
    categoriesCtrl.categories = categories;
  }

})();