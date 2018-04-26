app.controller('todoController', ['$scope', 'TodoService', '$http', '$routeParams', function($scope, TodoService, $http, $routeParams) {
    $scope.editing = false;
    TodoService.getTodo($routeParams.id) // Using a factory service, but could use a regular service.
    .success(function(data) {
        $scope.todo = data;
        $scope.task = data.item;
    })
    .error(function(err) {
        console.log("Error:", err);
    });

    $scope.editItem = function (event, item) { // When dblClick on the item.
        $scope.prevTask = $scope.task;
        console.log("Now editing!", event, item);
        $scope.editing = true;
    };

    $scope.doneEditing = function (item) { // When the input blurs.
        console.log("Input blurred!", $scope.todo.item);
        $scope.editing = false;
        if($scope.prevTask !== $scope.todo.item) { // If the task string changed.
            const url = 'http://localhost:3000/todos/'+$routeParams.id;
            console.log("Url:", url);
            TodoService.updateTodo(url, {item: $scope.todo.item})
            .success(function(data) {
                console.log("Updated the task!");
            })
            .error(function(err) {
                console.log("Error:", err);
            });
        }
    };
}]);