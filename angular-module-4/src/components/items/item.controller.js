(function () {
'use strict';

angular.module('data')
.controller('CategoryItemController', CategoryItemController);

CategoryItemController.$inject = ['itemsResolve'];
function CategoryItemController (itemsResolve){
  var categoryItem = this;

  categoryItem.items = itemsResolve;

};

})();
