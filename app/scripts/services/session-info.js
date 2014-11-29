'use strict';

/**
 * @ngdoc service
 * @name artfirmApp.sessionInfo
 * @description
 * # sessionInfo
 * Service in the artfirmApp.
 */
angular.module('artfirmApp')
  .service('sessionInfo', ['$rootScope',function sessionInfo($rootScope) {
    this.localStorageKey = '__SESSION_INFO';

    try {
      $rootScope.loginUser = JSON.parse(localStorage.getItem(this.localStorageKey) || "{}");
    } catch(e) {
      $rootScope.loginUser = {};
    }

    this.getLoginUser = function() {
      return $rootScope.loginUser;
    }

    this.isUserLogout = function() {
      if(this.getLoginUser() && this.getLoginUser().id) {
        return true;
      } else {
        return false;
      }
    };

    this.setUserInfo = function(info) {
      angular.extend($rootScope.loginUser, info);
      localStorage.setItem(this.localStorageKey, JSON.stringify($rootScope.loginuser));
    };
  }]);
