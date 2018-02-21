(function () {
    'use strict';
    angular
        .module('wrapper')
        .factory('wrapperModel', ['$rootScope',
            function ($rootScope) {

                var WrapperModel = {
                    surveyResponseList: null,
                    surveyResponseDetails: null,
                    surveyAttributeOptions: null,
                    surveyAttributeValues:null,
                    singleResponse:null
                };


                return WrapperModel;
            }
        ]);
})();