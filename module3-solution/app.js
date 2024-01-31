(function () {
'use strict';

angular
  .module('NarrowItDownApp', [])
  .service('MenuSearchService', MenuSearchService)
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItems)
  .constant('menuServer', "https://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'menuServer'];
function MenuSearchService($http, menuServer) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {;
    searchTerm = searchTerm.toLowerCase();
    var found = [];
    $http({
      method: "GET",
      url: (menuServer+"/menu_items.json")
    }).then(function (result) {
      var menu_items = result.data.menu_items;
      for (var i = 0; i < menu_items.length; i++) {
        var description = menu_items[i].description.toLowerCase();
        if (description.indexOf(searchTerm) !== -1) {
          found.push(menu_items[i]);
        }
      }
    });
    return found;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.searchItem = "";
  ctrl.foundItems;

  ctrl.search = function () {
    if (ctrl.searchItem === "") {
      ctrl.foundItems = [];
    }
    else {
      ctrl.foundItems = MenuSearchService.getMatchedMenuItems(ctrl.searchItem);
    }
  };
  ctrl.removeItem = function (index) {
    ctrl.foundItems.splice(index, 1);
  }
}



function FoundItems() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'founditems.html',
    scope: {
      items: '<',
      onRemove: '&',
      onRemoveMessage: '@'
    }
  };
  return ddo;
}

})();
