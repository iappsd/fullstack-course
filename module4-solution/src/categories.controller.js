(function () {
'use strict';

angular
  .module('MenuApp')
  .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allCategories'];
function CategoriesController(allCategories) {
  var categories = this;
  categories.categories = allCategories.data;
}

})();
