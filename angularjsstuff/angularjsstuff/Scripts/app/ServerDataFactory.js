//var appModule = new migrationModule("migrationApp", ["ngGrid"]);
var myApp = migrationModule.getModule();

var app = angular.module("myApp", []);

app.factory('migrationRepository', ['$http', function ($http) {
    var resource = "";
    var baseUrl = migrationModule.getBasePath();
    var users = ["Peter", "Daniel", "Nina"];

    return {
        all:function() {
            return users;
        },
        getServerDataList: function (callback) {
            resourcce = "http://crudwithwebapi.azurewebsites.net/api/serverdata";
            $http.get("http://crudwithwebapi.azurewebsites.net/api/serverdata").success(function(data) {
                alert("callback:", data);
                return data;
            });
            
        },

        getServerData: function (callback, id) {
            resource = baseUrl + "/api/serverdata/" + id;
            $http.get(resource).success(callback);
        },

        addServerData: function (callback, serverData) {

            var data = {
                "Id": serverData.Id,
                "InitialDate": serverData.InitialDate,
                "EndDate": serverData.EndDate,
                "OrderNumber": serverData.OrderNumber,
                "IsDirty": serverData.IsDirty,
                "IP": serverData.IP,
                "Type": serverData.Type,
                "RecordIdentifier": serverData.RecordIdentifier
            };

            resource = baseUrl + "/api/serverdata/";
            $http.post(resource, data).success(callback);

        },

        updateServerData: function (callback, serverData) {

            var data = {
                "Id": serverData.Id,
                "InitialDate": serverData.InitialDate,
                "EndDate": serverData.EndDate,
                "OrderNumber": serverData.OrderNumber,
                "IsDirty": serverData.IsDirty,
                "IP": serverData.IP,
                "Type": serverData.Type,
                "RecordIdentifier": serverData.RecordIdentifier
            };

            resource = baseUrl + "/api/serverdata/" + id;
            $http.put(resource, data.Id, data).success(callback);

        },
        deleteServerData: function (callback, id) {
            resource = baseUrl + "/api/serverdata/" + id;
            $http.delete(resource).success(callback);
        }

    };
}]);

app.controller('dataController', function($scope, migrationRepository) {

    $scope.dataList = migrationRepository.getServerData ();

    function getServerDataList() {
        migrationRepository.getServerDataList(function(data) {
            $scope.serverData = data;

        });
    }

    $scope.setScope = function(obj, action) {
        $scope.action = action;
        $scope.$new = obj;
    }

    $scope.gridOptions = {
        data: "serverData",
        showGroupPanel: true,
        columnDefs: [
            { field: "InitialDate", displayName: "Initial Date", width: "15%" },
            { field: "EndDate", displayName: "End Date", width: "15%" },
            { field: "OrderNumber", displayName: "Order Number", width: "15%" },
            { field: "IsDirty", displayName: "IsDirty?", width: "15%" },
            { field: "IP", displayName: "IP", width: "15%" },
            { field: "Type", displayName: "Type", width: "15%" },
            { field: "RecordIdentifier", displayName: "Identifier", width: "15%" },
            { displayName: "Options", cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit"  value="Edit">&nbsp;<input type="button" ng-click="deleteServerData(row.entity.id)"  name="delete"  value="Delete">' }
        ]
    };

    $scope.updateServerData = function() {
        if ($scope.action == "edit") {
            migrationRepository.updateServerData(function() {
                $scope.status = "Data updated scuccessfully!";
                alert("Data updated scuccessfully!");
                getServerDataList();
            }, $scope.New);

        } else {
            migrationRepository.addServerData(function() {
                alert("New record added successfully!");
                getServerDataList();
            }, $scope.$new);
        }
    }

    $scope.deleteServerData = function(id) {
        migrationRepository.deleteServerData(function() {
            alert("Existing record deleted!");
            getServerDataList();
        }, id);
    }
});
