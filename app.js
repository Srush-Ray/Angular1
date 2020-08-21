(function () {
  "use strict";

  angular
    .module("MessageApp", [])
    .controller("MessageAppController", msgController);
  msgController.$inject = ["$scope"];
  function msgController($scope) {
    $scope.message = "";
    $scope.message1 = "";
    $scope.comment = "";
    $scope.items = "";
    $scope.showMessage = function () {
      $scope.message = "";
      $scope.message1 = "";
      $scope.comment = "";
      var item = $scope.items.split(",");
      var count = item.length;
      for (let index = 0; index < item.length; index++) {
        const element = item[index];
        if (element == " ") {
          $scope.comment = ", , will not be considered as an item.";
          count--;
        }
      }
      if (count <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message1 = "Too much!";
      }
    };
  }
})();
