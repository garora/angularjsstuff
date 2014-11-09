//var appModule = new migrationModule("migrationApp", ["ngGrid"]);
var myApp = migrationModule.getModule();
var baseUrl = migrationModule.getBasePath();


angular.module('serverdatafactory', []).factory('migrationRepository', ['$http', function ($http) {
    var resource = "";
    
    return {
        getServerDataList: function (callback) {
            resourcce = baseUrl + "/api/serverdata";
            $http.get(resource).success(callback);
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
