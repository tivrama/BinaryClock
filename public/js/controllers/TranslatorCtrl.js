// public/js/controllers/MainCtrl.js
angular.module('TranslatorCtrl', []).controller('TranslatorController', function($scope) {

  $scope.nTOb = function() {
    $scope.nTObResult = ($scope.userEntry1 >>> 0).toString(2);
  };

  $scope.bTOn = function() {
    for (var i = 0; i < $scope.userEntry2.length; i++) {
      if ($scope.userEntry2[i] !== '1' && $scope.userEntry2[i] !== '0') {
        return $scope.bTOnResult = 'Only 1\'s and 0\'s please';
      }
    };
    $scope.bTOnResult = parseInt($scope.userEntry2, 2);
  };

});