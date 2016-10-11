(function() {
    'use strict';

    angular
        .module('tiny')
        .factory('wordpressService', wordpressService);
    wordpressService.$inject = ['$http', '$q'];
    /* @ngInject */
    function wordpressService($http, $q) {
        var service = {
            // PROPERTIES
            selectedItem: null,
            // METHODS
            makeCall: makeCall,
        };
        return service;

        ////////////////
        function makeCall(call) {
            var def = $q.defer();
            $http.get('http://www.thirsty-test.com.php56-5.ord1-1.websitetestlink.com/tiny/api/' + call, {}).success(function(results) {
                def.resolve(results);
            });
            return def.promise;
        }
    }
})();
