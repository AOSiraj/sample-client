'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'oc.lazyLoad',
    'wrapper',
]).
config(['$locationProvider', '$routeProvider','$ocLazyLoadProvider', function($locationProvider, $routeProvider, $ocLazyLoadProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/wrapper'});
  $ocLazyLoadProvider.config({
        //asyncLoader: requirejs,
        loadedModules : ['myApp'],
    });
}]);
