(function() {
    'use strict';

    angular
        .module('tiny')
        .factory('googleDriveService', googleDriveService);
    googleDriveService.$inject = ['$http', '$q'];
    /* @ngInject */
    function googleDriveService($http, $q) {
        var service = {
            getData: getData
        };
        return service;

        ////////////////
        function Comparator(a, b) {
            if (a[1] > b[1]) return -1;
            if (a[1] < b[1]) return 1;
            return 0;
        }

        function getData(raceClass) {
            var def = $q.defer();
            $http.get('https://spreadsheets.google.com/feeds/list/1SXLKZenMLZfvzj7MdKMj2FnkzSL4Sanbczk_trpLG-8/5/public/full?alt=json', {}).success(function(data) {
                var results = [];
                for (var i = 0; i < data.feed.entry.length; i++) {
                    if (data.feed.entry[i].title) {
                        var lapIndex = 0; //GT
                        if (raceClass === "LMP") {
                            lapIndex = 1;
                        } else if (raceClass === "CLUB") {
                            lapIndex = 2;
                        }
                        var val = data.feed.entry[i].content.$t.split(',')[lapIndex].split(':')[1];
                        var temp = [data.feed.entry[i].title.$t, parseInt(val)];
                        results.push(temp);
                    }
                }
                results = results.sort(Comparator);
                for (var i = 0; i < results.length; i++) {
                    var place = i + 1;
                    if (place === 1) {
                        place += "st";
                    } else if (place === 2) {
                        place += "nd";
                    } else if (place === 3) {
                        place += "rd";
                    } else {
                        place += "th";
                    }
                    results[i][0] = place + " " + results[i][0];
                }
                def.resolve(results);
            });
            return def.promise;
        }
    }
})();
