'use strict';



angular.module('myApp.view5', ['ngRoute'])



        .config(['$routeProvider', function ($routeProvider) {

                $routeProvider.when('/view5', {
                    templateUrl: 'view5/view5.html',
                    controller: 'View5Ctrl'

                });

            }])
        .controller('View5Ctrl', function ($scope, UserFactory) {

            UserFactory.fetchUsers().then(
                    function OK(response) {

                        $scope.data = response.data;
                    }, function notOK() {
                //DO something here
            }
            );
            console.log(UserFactory);

        })

        .factory('UserFactory', ['$http', function ($http) {

                return({
                    fetchUsers: fetchUsers

                });

                function fetchUsers() {

                    return $http.get('api/demoadmin/user');

                };
            }]);

;