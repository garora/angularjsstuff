var app = angular.module("MyApp", []); 

app.factory("AuthorService", function() 
{ var authors = ["Shivprasad Koirala", "Sukesh Marla", "Gaurav Kumar Arora"]; 
return { 
all: function()
 { 
 return authors; 
 }, 
 }; 
 }); 

app.controller("MyCtrl", function($scope, AuthorService) 
{
 $scope.authors = AuthorService.all();
 });