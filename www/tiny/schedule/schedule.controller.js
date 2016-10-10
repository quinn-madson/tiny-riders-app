(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject = ['$scope', '$state', 'scheduleService'];

    /* @ngInject */
    function ScheduleController($scope, $state, scheduleService) {
        // METHODS
        $scope.setMode = setMode;
        $scope.nav = nav;
        // PROPERTIES
        $scope.events = [];
		$scope.pastEvents = [];
        $scope.futureEvents = [];
        activate();

        function activate() {
            scheduleService.getSchedule().then(function(response) {
                for (var i = 0; i < response.items.length; i++) {
                    if (response.items[i].start) {
                        if (moment(response.items[i].start.dateTime).diff(moment()) < 21600) {
                           $scope.pastEvents.push(response.items[i]);
                        } else {
                            $scope.futureEvents.push(response.items[i]);
                        }
                    }
                }
                $scope.events = $scope.futureEvents;
                $scope.pastEvents = $scope.pastEvents.reverse();
                console.log("$scope.events", $scope.events);
            });
        }

        function setMode(mode) {
            if (mode === "future") {
                $scope.events = $scope.futureEvents;
            } else {
                $scope.events = $scope.pastEvents;
            }
        }

        function nav(ev) {
            console.log("nav exec: ev", ev);
            scheduleService.selectedItem = ev;
            $state.go('app.scheduleDetails');
        }
    }
})();
