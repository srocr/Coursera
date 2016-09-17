(function (){
  'use strict';
  var module = angular.module('module1Assignment',[]);
  module.controller("TooMuchFoodController", tooMuchFoodController);
  tooMuchFoodController.$inject = ['$scope'];
  function tooMuchFoodController ($scope){
    $scope.checkIfTooMuch = function(){
      if(!$scope.dishes){
        $scope.messageInfo = {text :"Please enter data first!", color : "text-danger"};
        return;
      }
      var count = countDishes();
      if(count <= 3){
        $scope.messageInfo = {text :"Enjoy!", color: "text-success bg-success"};
      }else{
        $scope.messageInfo = {text:"Too much!", color: "text-danger bg-danger"};
      }
      if( $scope.dishes.split(',').length != count){
          $scope.messageInfo.text+=" (Empty text will not be considered a valid entry!)"
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
