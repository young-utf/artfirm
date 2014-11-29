'use strict';

/**
 * @ngdoc service
 * @name artfirmApp.msFactory
 * @description
 * # msFactory
 * Factory in the artfirmApp.
 */
angular.module('artfirmApp')
  .factory('msRequestFactory', function () {
    // Service logic

    var createRequest = function(area, resource, id, request){
      if(!request)
        request = {};

      return {
        'area': area,
        'resource': resource,
        'id': id,
        'request': request
      };
    };

    return {
      createRequest: createRequest
    };
  });
