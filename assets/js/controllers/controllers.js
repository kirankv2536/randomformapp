angular.module('formApp.controllers', ['formApp.services'])
.controller('mainCtrl', function($scope, $stateParams, $http, $state, urls, $rootScope) {
        
})

.controller('homeCtrl', function($scope, $stateParams, $http, $state, urls, $rootScope) {

    $scope.getnewform =function(){

        $http.get(urls.apiUrl).success(function(data) {
                    console.log(data)

                    $scope.formData = data.data;
                    console.log(JSON.stringify($scope.formData));
                    $scope.formInfo=false;

                })
                .error(function(data) {
                    
                    console.log("No results found.")
                });

    }

    $scope.formSubmit=function(data){

        console.log(data)
        $http.post(urls.apiUrl+'/submit',data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                console.log(data)
                $scope.formInfo = data.success;
                console.log("form info", $scope.formInfo);
            })
            .error(function(data) {
                console.log(data);
                

            });

    }
        
})
