(function(){
  var menuModule  = angular.module('MenuApp');
  menuModule.config(MenuAppConfiguration);

MenuAppConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MenuAppConfiguration($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home',{
      url: '/',
      templateUrl: 'src/templates/menuapp.home.template.html'
    })

    .state('categories',{
      url: '/categories',
      templateUrl: 'src/templates/menuapp.categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
          .then(function(response){
            return response.data;
          })
          .catch(function(error){
            console.log("Something went wrong while retriving categories!");
            console.log(error);
          });
      }]
      }
    })

    .state('categories.categoryItems', {
      url: '/category-item/{short}',
      templateUrl:'src/templates/items.template.html',
      controller:'CategoryItemController as categoryItem',
      resolve: {
        itemsResolve: ['MenuDataService', '$stateParams', 'categories',
                function (MenuDataService, $stateParams, categories) {
                  return MenuDataService.getItemsForCategory($stateParams.short)
                  .then(function(response){
                    return response.data.menu_items;
                  })
                  .catch(function(error){
                    console.log("Something went wrong while retriving items for category!");
                    console.log(error);
                  });
                  }
                ]}
      });
  }
})();
