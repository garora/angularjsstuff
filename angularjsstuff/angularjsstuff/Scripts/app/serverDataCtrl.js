//var myApp = migrationModule.getModule();
//var app = angular.module('myApp', []);

//app.controller('dataController', ['migrationRepository', function ($scope, migrationRepository) {
//    $scope.users = migrationRepository.all();

//        function getServerDataList() {
//            migrationRepository.getServerDataList(function (data) {
//                $scope.serverData = data;

//            });
//        }

//        $scope.setScope = function (obj, action) {
//            $scope.action = action;
//            $scope.$new = obj;
//        }

//        $scope.gridOptions = {
//            data: "serverData",
//            showGroupPanel: true,
//            columnDefs: [
//                { field: "InitialDate", displayName: "Initial Date", width: "15%" },
//                { field: "EndDate", displayName: "End Date", width: "15%" },
//                { field: "OrderNumber", displayName: "Order Number", width: "15%" },
//                { field: "IsDirty", displayName: "IsDirty?", width: "15%" },
//                { field: "IP", displayName: "IP", width: "15%" },
//                { field: "Type", displayName: "Type", width: "15%" },
//                { field: "RecordIdentifier", displayName: "Identifier", width: "15%" },
//                { displayName: "Options", cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit"  value="Edit">&nbsp;<input type="button" ng-click="deleteServerData(row.entity.id)"  name="delete"  value="Delete">' }
//            ]
//        };

//        $scope.updateServerData = function () {
//            if ($scope.action == "edit") {
//                migrationRepository.updateServerData(function () {
//                    $scope.status = "Data updated scuccessfully!";
//                    alert("Data updated scuccessfully!");
//                    getServerDataList();
//                }, $scope.New);

//            } else {
//                migrationRepository.addServerData(function () {
//                    alert("New record added successfully!");
//                    getServerDataList();
//                }, $scope.$new);
//            }
//        }

//        $scope.deleteServerData = function (id) {
//            migrationRepository.deleteServerData(function () {
//                alert("Existing record deleted!");
//                getServerDataList();
//            }, id);
//        }
//    }]);
    