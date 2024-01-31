(function () {
'use strict';

angular
  .module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('menuServer', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'menuServer'];
function MenuDataService($http, menuServer) {
  var service = this;
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (menuServer+"/categories.json")
    });
  }
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (menuServer+"/menu_items.json"),
      params: {category: categoryShortName}
    });
  }
}

})();
