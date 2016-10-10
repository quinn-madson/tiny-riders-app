(function() {
    'use strict';
    var tiny = angular.module('tiny');
    tiny.filter('fromNow', fromNow);
    tiny.filter('unassignedDrivers', unassignedDrivers);

    function fromNow() {
        return function(dateFrom) {
            return moment(dateFrom).fromNow();
        };
    }

    function unassignedDrivers() {
        return function(drivers, form) {
        	var availableDrivers = [];
        		for (var i = 0; i < drivers.length; i++) {
        			var driver = drivers[i];
        			if (driver.id !== form.driver1.id && driver.id !== form.driver2.id && driver.id !== form.driver3.id && driver.id !== form.driver4.id) {
        				availableDrivers.push(driver);
        				console.log("unassigned: ", driver);
        			} else {
        				console.log("assigned: ", driver);
        			}
        		}
        		console.log("availableDrivers", availableDrivers);
            return availableDrivers;
        };
    }

})();
