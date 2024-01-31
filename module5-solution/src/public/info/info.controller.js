(function () {
"use strict";

angular
  .module('public')
  .controller('InfoController', InfoController);

InfoController.$inject = ['user', 'category'];
function InfoController(user, category) {
  var info = this;

  info.user = user;
  info.category = category;

  info.isOK = function() {
    return info.user
      && info.user.firstName !== ''
      && info.user.lastName !== ''
      && info.user.phone !== ''
      && info.user.email !== ''
      && info.category;
  };
}

})();
