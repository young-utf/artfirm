'use strict';

/**
 * @ngdoc function
 * @name artfirmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artfirmApp
 */
angular.module('artfirmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
