/**
 * Created by user on 8/18/16.
 */
var app = angular.module('tinyurlApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "xxx",
            controller: "xxx"
        });
});