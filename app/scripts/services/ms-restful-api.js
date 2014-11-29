'use strict';

/**
 * @ngdoc service
 * @name artfirmApp.msRestfulApi
 * @description
 * # msRestfulApi
 * Factory in the artfirmApp.
 */
angular.module('artfirmApp')
  .factory('msRestfulApi',['$resource',function ($resource) {
    // Service logic
    var prefixUrl = '/api/v1';

    return $resource(
      prefixUrl + '/:area/:resource/:id',
      {
        area: "@area",
        resource: "@resource",
        id: "@id"
      },
      {
        'get': {method: 'GET', isArray: true},
        'save': {method: 'POST'},
        'update': {method: 'PUT'},
        'delete': {method: 'DELETE'},
        'login': {method: 'POST'}
      });
  }]);
