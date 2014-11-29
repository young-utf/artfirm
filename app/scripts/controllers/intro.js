'use strict';

/**
 * @ngdoc function
 * @name artfirmApp.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the artfirmApp
 */
angular.module('artfirmApp')
  .controller('IntroCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
