(function () {
  "use strict";

  angular.module("MsgShow", []).controller("MsgShowController", msgController);
  msgController.$inject = ["$scope"];
  function msgController($scope) {
    $scope.name = "Srush";
    $scope.state = "answer";
    $scope.sayMessage = function () {
      return "Srush likes pav bhaji";
    };
    $scope.feedme = function () {
      $scope.state = "apply";
    };
  }
})();
