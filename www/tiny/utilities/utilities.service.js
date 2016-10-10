(function() {
    'use strict';

    angular
        .module('tiny')
        .factory('utilitiesService', utilitiesService);
    utilitiesService.$inject = ['$ionicLoading'];
    /* @ngInject */

    function utilitiesService($ionicLoading) {
        var service = {
            //METHODS
            showLoading: showLoading,
            hideLoading: hideLoading
        };
        return service;

        ////////////////

        function showLoading() {
            $ionicLoading.show({
                templateUrl: "tiny/core/loading.html"
            });
        }

        function hideLoading() {
            $ionicLoading.hide();
        }

    }
})();
