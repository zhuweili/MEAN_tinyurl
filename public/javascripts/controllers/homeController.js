/**
 * Created by user on 8/18/16.
 */
var app = angular.module("tinyurlApp");

app.controller("homeController", ["$scope", "$http",function($scope, $http) {
    $scope.submit = function() {
        console.log($scope.longUrl);
        $http.post ("/api/v1/urls", {
            longUrl: $scope.longUrl
        });
    }
}]);