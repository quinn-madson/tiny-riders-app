(function() {
    'use strict';

    angular
        .module('tiny')
        .factory('scheduleService', scheduleService);

    scheduleService.$inject = ['$http', '$q', 'utilitiesService'];

    /* @ngInject */
    function scheduleService($http, $q, utilitiesService) {
        var service = {
            // PROPERTIES
            selectedItem: null,
            // METHODS
            getSchedule: getSchedule
        };
        return service;

        ////////////////

        function getSchedule() {
            utilitiesService.showLoading();
            var deferred = $q.defer();
            $http.get("https://www.googleapis.com/calendar/v3/calendars/kocnmf46r5u0nl92l2ags04c24@group.calendar.google.com/events?key=AIzaSyDKUpdJWB9dkMfq-s8YwBw-umjHHHWCTak")
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
