 angular.module('formApp', ['ui.router',
     'formApp.controllers',
     'formApp.services',
     
     'formApp.directives'
 ])


.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('home', {
            url:"/",
            templateUrl: "views/home.html",
            controller:'homeCtrl'
        })
		
})
