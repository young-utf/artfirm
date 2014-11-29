'use strict';

/**
 * @ngdoc overview
 * @name artfirmApp
 * @description
 * # artfirmApp
 *
 * Main module of the application.
 */
angular
  .module('artfirmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('intro',{
        url: '/intro',
        templateUrl: 'views/Intro/intro.html',
        controller: 'IntroCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/Intro/about.html',
        controller: 'IntroCtrl'
      })
      .state('map',{
        url: '/map',
        templateUrl: 'views/Intro/map.html',
        controller: 'IntroCtrl'
      })
      .state('login',{
        url: '/login',
        templateUrl: 'views/User/login.html',
        controller: 'UserCtrl'
      })
      .state('join',{
        url: '/join',
        templateUrl: 'views/User/join.html',
        controller: 'UserCtrl'
      })
      .state('myinfo',{
        url: '/myinfo',
        templateUrl: 'views/User/myinfo.html',
        controller: 'UserCtrl'
      })
      .state('myposts',{
        url: '/myposts',
        templateUrl: 'views/User/myposts.html',
        controller: 'UserCtrl'
      });
  }]);
