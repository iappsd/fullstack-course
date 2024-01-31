(function () {
'use strict';

angular
  .module('ShoppingList', [])
  .controller('ShoppingListToBuyController', ShoppingListToBuyController)
  .controller('ShoppingListBoughtController', ShoppingListBoughtController)
  .provider('ShoppingListService', ShoppingListServiceProvider)
  .config(Config);


  var shoppingList = [
    {
      name:     "Cookies",
      quantity: 10
    },
    {
      name:     "Donuts",
      quantity: 10
    },
    {
      name:     "Drinks",
      quantity: 5
    },
    {
      name:     "Apples",
      quantity: 2
    },
    {
      name:     "Ice Creams",
      quantity: 4
    },
  ];


  Config.$inject = ['ShoppingListServiceProvider'];
  function Config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.shoppingList = shoppingList;
  }


  function ShoppingListServiceProvider() {
    var provider = this;

    provider.defaults = {
      shoppingList: []
    };

    provider.$get = function () {
      return new ShoppingListService(provider.defaults.shoppingList);
    };
  }


  function ShoppingListService(shoppingList) {
    var service = this;

    service.shoppingList = shoppingList;

    service.getItems = function () {
      return service.shoppingList;
    };
  }


  ShoppingListToBuyController.$inject = ['ShoppingListService'];
  function ShoppingListToBuyController(ShoppingListService) {
    var list = this;

    list.shoppingList = ShoppingListService.getItems();

    list.getItems = function () {
      return list.shoppingList;
    };

    list.removeItem = function (itemIndex) {
      console.log(list);
      var item = shoppingList[itemIndex];
      list.shoppingList.splice(itemIndex, 1);
      return item;
    };
  }

  function ShoppingListBoughtController() {
    var list = this;

    list.alreadyBought = [];

    list.getItems = function () {
      return list.alreadyBought;
    };

    list.addItem = function (item) {
      list.alreadyBought.push(item);
    };
  }

})();
