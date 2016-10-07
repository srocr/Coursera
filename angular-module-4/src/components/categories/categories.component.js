(function () {
'use strict';

angular.module('data')
.component('category', {
  templateUrl: 'src/templates/categories.component.template.html',
  bindings: {
    categories: '<'
  }
});

})();
