'use strict';

angular.module('myApp.view5', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view5', {
                    templateUrl: 'view5/view5.html',
                    controller: 'View5Ctrl'
                });
            }])

        .controller('View5Ctrl', function ($scope, UserFactory) {
            $scope.data = UserFactory.fetchUsers();
            console.log(UserFactory);
        })
        .factory('UserFactory', ['$http', function ($http) {       
                           return({fetchUsers: this.fetchUsers});
                function fetchUsers () {
                        $http.get('api/demoadmin/user')
                                .success(function (data, status, headers, config) {
//                                 console.log(data);
                                            return data;
                                })
                                .error(function (data, status, headers, config) {
                                    return data;
                                });
                    };
                
            }]);
;