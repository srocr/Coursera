(function(){

  angular.module('data')
  .component('itemsComponent', {
    templateUrl:'src/templates/items.component.template.html',
    bindings:{
      items: '<'
    }
  });
})();
