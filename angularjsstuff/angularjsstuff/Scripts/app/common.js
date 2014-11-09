var migrationModule = new function () {

    this.name = "migrationApp";
    this.param = "['ngGrid']";
    this.basePath = "http://crudwithwebapi.azurewebsites.net";

    this.getBasePath = function () { return "http://crudwithwebapi.azurewebsites.net"; };

    this.getModule = function () {
        return angular.module('migrationApp', ['ngGrid']);
    };

}