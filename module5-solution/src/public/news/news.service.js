(function () {
"use strict";

angular
  .module('public')
  .service('NewsService', NewsService);

NewsService.$inject = ['MenuService'];
function NewsService(MenuService) {
  var service = this;

  service.previousTopic = "";
  service.previousCheck = false;

  service.check = function(topic, assignTo) {
    if (topic === service.previousTopic) {
      assignTo(service.previousCheck);
    }
    else if (!topic || topic === "") {
      service.previousTopic = topic;
      service.previousCheck = false;
      assignTo(false);
    }
    else {
      MenuService
        .getMenuItems(topic)
        .then(
          function (response) {
            var responseCheck = response.menu_items && response.menu_items.length > 0;
            service.previousTopic = topic;
            service.previousCheck = responseCheck;
            assignTo(responseCheck);
          },
          function (response) {
            service.previousTopic = topic;
            service.previousCheck = false;
            assignTo(false);
          });
    }
  };
}

})();
