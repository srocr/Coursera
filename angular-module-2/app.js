(function(){
  'use strict';
  var module = angular.module('ShoppingListCheckOff', []);
  module.controller('ToBuyShoppingController', ToBuyShoppingController);
  module.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
  module.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyProduct = function (index){
      ShoppingListCheckOffService.buy(index);
    };
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var alreadyBoughtCrl = this;
    alreadyBoughtCrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyItems = [{name: 'cookies', quantity: 10}, {name : 'chips', quantity:2},
    {name : 'peanut buter', quantity:3}, {name : 'bananas', quantity:6},
    {name : 'chocolate', quantity:5} ];

    var boughtItems = [];

    service.getToBuyItems = function(){
      return toBuyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.buy = function(index){
      var bought = toBuyItems.splice(index, 1);
      boughtItems.push(bought[0]);
    };

  }
})();
