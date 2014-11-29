'use strict';

/**
 * @ngdoc function
 * @name artfirmApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the artfirmApp
 */
angular.module('artfirmApp')
  .controller('UserCtrl',['$scope', '$state', function ($scope, $state) {
    $scope.submitLogin = function(){
      console.log($scope.login);
      $state.go('main');
    }
  }]);
