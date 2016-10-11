(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('ScheduleDetailsController', ScheduleDetailsController);

    ScheduleDetailsController.$inject = ['$scope', 'scheduleService'];

    /* @ngInject */
    function ScheduleDetailsController($scope, scheduleService) {
        $scope.event = null;
        activate();

        function activate() {
            $scope.event = scheduleService.selectedItem;
        }
    }
})();
