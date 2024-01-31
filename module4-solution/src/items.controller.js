(function () {
'use strict';

angular
  .module('MenuApp')
  .controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems'];
function ItemsController(categoryItems) {
  var items = this;
  items.category = categoryItems.data.category.short_name;
  items.name = categoryItems.data.category.name;
  items.menuItems = categoryItems.data.menu_items;
}

})();
