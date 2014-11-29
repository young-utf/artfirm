'use strict';

/**
 * @ngdoc function
 * @name artfirmApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the artfirmApp
 */
angular.module('artfirmApp')
  .controller('UserCtrl',['$scope', '$state','sessionService','sessionInfo','$log',
    function ($scope, $state, sessionService, sessionInfo, $log) {
    $scope.submitLogin = function(){
      sessionService.login($scope.login, changeState);
    }

    function changeState(response) {
      alert(sessionInfo.getLoginUser().name + ', Welcome :)');
      $state.go('main');
    }
  }]);
