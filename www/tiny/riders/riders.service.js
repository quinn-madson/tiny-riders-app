(function() {
    'use strict';

    angular
        .module('tiny')
        .factory('ridersService', ridersService);

    ridersService.$inject = ['$http', '$q', 'utilitiesService'];

    /* @ngInject */
    function ridersService($http, $q, utilitiesService) {
        var service = {
            // PROPERTIES
            selectedItem: null,
            // METHODS
            getRiders: getRiders
        };
        return service;

        ////////////////

        function getRiders() {
            utilitiesService.showLoading();
            var deferred = $q.defer();
            $http.get("#")
                .success(getComplete)
                .error(getFailed);

            function getComplete(response) {
                utilitiesService.hideLoading();
                deferred.resolve(response);
            }

            function getFailed(err) {
                utilitiesService.hideLoading();
                deferred.reject("error");
                alert('Network request failed. Please try again: ' + err);

            }
            return deferred.promise;
        }

    }
})();
