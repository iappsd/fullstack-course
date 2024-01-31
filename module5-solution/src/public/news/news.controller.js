(function () {
"use strict";

angular
  .module('public')
  .controller('NewsController', NewsController);

NewsController.$inject = ['NewsService', 'InfoService'];
function NewsController(NewsService, InfoService, $state) {
  var news = this;

  news.service = NewsService;
  news.db = InfoService;

  news.user = news.db.getUser();
  news.menuItem = news.db.getUserPreference();
  news.menuItemOK;

  news.checkMenuItem = function () {
    news.menuItemOK = undefined;
    news.service.check(
      news.menuItem,
      function(f) {
        news.menuItemOK = f;
      });
  }

  news.submit = function () {
    return news.db.saveUserAndPreference(news.user, news.menuItemOK === true ? news.menuItem : "");
  };
}

})();
