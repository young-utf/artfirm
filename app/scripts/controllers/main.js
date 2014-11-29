'use strict';

/**
 * @ngdoc function
 * @name artfirmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artfirmApp
 */
angular.module('artfirmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
