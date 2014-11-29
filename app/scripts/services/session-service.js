'use strict';

/**
 * @ngdoc service
 * @name artfirmApp.sessionService
 * @description
 * # sessionService
 * Service in the artfirmApp.
 */
angular.module('artfirmApp')
  .service('sessionService',[ 'msRequestFactory','msRestfulApi','sessionInfo','$log',
  function sessionService(msRequestFacotry, msRestfulApi, sessionInfo, $log) {

    this.login = function(params, successCallback){
      // 1) create request
      var request = msRequestFacotry.createRequest('authentication','login','');

      // 2) set params
      request.params = {
        email: params.email,
        password: params.password
      }

      // 3) call ajax
      msRestfulApi.login(request,
          function(response) {
            sessionInfo.reset();
            sessionInfo.setUserInfo(response);
            successCallback(response);
          },
          function(error) {
            //fail
            $log.error('Server Exception is ', error);
          }
      )
    }
  }]);
