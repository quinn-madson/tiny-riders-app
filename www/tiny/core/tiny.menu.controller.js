(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('tinyMenuController', tinyMenuController);

    tinyMenuController.$inject = ['$scope'];

    /* @ngInject */
    function tinyMenuController($scope) {
        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function(group) {
        	console.log("group", group);
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };
    }
})();
