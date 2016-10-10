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
            console.log(scheduleService.selectedItem);
            $scope.event = scheduleService.selectedItem;
        }
    }
})();
