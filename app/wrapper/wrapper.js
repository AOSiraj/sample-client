'use strict';

angular.module('wrapper', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wrapper', {
            templateUrl: 'wrapper/view/wrapper.html',
            controller: 'wrapperCtrl',

            resolve: {
                wrapperCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    var files = [
                        'wrapper/controller/wrapperCtrl.js',
                        'wrapper/model/wrapperModel.js',
                    ];

                    return $ocLazyLoad.load([
                        {
                            name: 'wrapperCtrl',
                            files: files
                        }
                    ]);
                }],
            }
        });
    }]);