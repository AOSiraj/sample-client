(function () {
    'use strict';
    angular
        .module('wrapper')
        .controller('wrapperCtrl', [
            '$rootScope',
            '$scope',
            '$location',
            '$q',
            '$routeParams',
            '$window',
            'wrapperModel',
            function ($rootScope, $scope, $location,$q,
                      $routeParams, $window, wrapperModel) {

                init();
                
                function init() {

                }

            }

        ]);
})();
