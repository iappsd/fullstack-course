(function () {
"use strict";

angular
  .module('public')
  .service('InfoService', InfoService);

function InfoService() {
  var service = this;

  service.db = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    menuItem: undefined
  };

  service.getUser = function() {
    return {
      firstName: service.db.firstName,
      lastName: service.db.lastName,
      phone: service.db.phone,
      email: service.db.email
    };
  };

  service.getUserPreference = function() {
    return service.db.menuItem;
  };

  service.saveUserAndPreference = function(user, menuItem) {
    service.db.firstName = user.firstName;
    service.db.lastName = user.lastName;
    service.db.phone = user.phone;
    service.db.email = user.email;
    service.db.menuItem = menuItem;
    return true;
  };
}

})();
