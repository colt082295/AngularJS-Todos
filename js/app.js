var app = angular.module("myApp", ["ngRoute"]); // ui.router
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: '<todos></todos>', // Using a custom directive here instead of a templateUrl
            controller: 'todosController'
        })
        .when('/task/:id', {
            templateUrl: '/js/templates/todo.html',
            controller: 'todoController'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
});

// Ui Router example
// app.config(function($stateProvider) {
//     var homeState = {
//       name: 'home',
//       url: '/',
//     //   template: '<todos></todos>',
//       template: '<h1>Home</h1>',
//       controller: 'todosController'
//     }
  
//     var todoState = {
//       name: 'todo',
//       url: '/todo/{id}',
//       templateUrl: '/js/templates/todo.html',
//       controller: 'todoController'
//     }
  
//     $stateProvider.state(homeState);
//     $stateProvider.state(todoState);
//   });