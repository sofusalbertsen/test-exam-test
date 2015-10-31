'use strict';

angular.module('myApp.view5', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view5', {
                    templateUrl: 'view5/view5.html',
                    controller: 'View5Ctrl'
                });
            }])

        .controller('View5Ctrl', function ($scope, userFactory) {
            $scope.data = userFactory.fetchUsers;
    
        })
        .factory('userFactory', function ($http) {
            
                    var fetchUsers = function () {
                $http.get('api/demoadmin/user')
                        .success(function (data, status, headers, config) {
                            return data;
                        })
                        .error(function (data, status, headers, config) {

                        });

            };
            
            console.log(fetchUsers());
            return fetchUsers;
        });