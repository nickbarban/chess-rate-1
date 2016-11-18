'use strict';

angular.module('chessApp')

    .controller('RatingCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        console.log("RatingCtrl is loaded");

        $scope.gridOptions = {
            data: 'players',
            enableFiltering: false,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            enableHorizontalScrollbar: 0,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
                // $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
            },
            columnDefs: [
                {field: 'playerId', displayName: 'Id'},
                {field: 'name', displayName: 'Name'},
                {
                    field: 'rating',
                    displayName: 'Rating',
                    cellTemplate: '<mh-rating rating-value="row.entity.rating" view-only="true" max-rate="5" >' +
                    '</mh-rating>',
                }
            ]
        };

        $scope.edit = function () {
            // $rootScope.$state.go('editplayer', {playerId: $scope.gridApi.selection.getSelectedRows()[0].id});
            console.log("selected: " + $scope.gridApi.selection.getSelectedRows()[0].id)
        };

        /*более 2700 – элитный гроссмейстер (неофициальная, условная категория);
         2500-2699 – гроссмейстер;
         2400-2499 – международный мастер;
         2300-2399 – национальный мастер;
         2100-2299 – кандидат в мастера;
         1900-2099 – первый разряд;
         1600-1899 – второй разряд;
         1400-1599 – третий разряд;
         1200-1399 – средний любитель;
         1000-1199 – слабый любитель;
         менее 1000 – новичок.*/
    }]);