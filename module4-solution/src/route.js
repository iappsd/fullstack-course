(function () {

angular
  .module('MenuApp')
  .config(MenuAppConfig);

MenuAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuAppConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      controller: 'CategoriesController as categories',
      resolve: {
         allCategories: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
    })
    .state('items', {
      url: '/items/{category}',
      templateUrl: 'src/items.html',
      controller: 'ItemsController as items',
      resolve: {
         categoryItems: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
           return MenuDataService.getItemsForCategory($stateParams.category);
         }]
       }
    });
}

})();
