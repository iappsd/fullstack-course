(function () {
'use strict';

angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.menuMessage = "";
  $scope.menuMessageStyle = "";

  $scope.checkMenu = function () {
    var dishCount = countTextWithoutComma($scope.dishes);
    if (dishCount == 0) {
      $scope.menuMessageStyle = "color: red; border: medium solid red;";
      $scope.menuMessage = "Please enter data first";
    }
    else {
      $scope.menuMessageStyle = "color: green; border: medium solid green";
      if (dishCount <= 3) {
        $scope.menuMessage = "Enjoy!";
      }
      else {
        $scope.menuMessage = "Too Much!";
      }
    }
  };

  $scope.getMenuMessage = function () {
    return $scope.menuMessage;
  };
  $scope.getMenuMessageStyle = function () {
    return $scope.menuMessageStyle;
  };
}

function countTextWithoutComma(s) {
  var n = s.match(/[^,\s][^,]*/g);
  if (n) {
    return n.length;
  }
  return 0;
}
})();
