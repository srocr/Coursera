(function (){
  'use strict';
  var module = angular.module('module1Assignment',[]);
  module.controller("TooMuchFoodController", tooMuchFoodController);
  tooMuchFoodController.$inject = ['$scope'];
  function tooMuchFoodController ($scope){
    $scope.checkIfTooMuch = function(){
      if(!$scope.dishes){
        $scope.message = "Please enter data first!";
        return;
      }
      var count = countDishes();
      if(count <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    }

    var countDishes = function(){
      var count = 0;
      var dishes = $scope.dishes.split(',');
      for(var index in dishes){
        if(dishes[index].trim()){
          count++;
        }
      }
      return count;
    }
  }
})();
