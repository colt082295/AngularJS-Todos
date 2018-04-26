app.controller('todosController', ['$scope', 'TodosService', '$http', function($scope, TodosService, $http) {
    TodosService.getTodos()
    .success(function(data) { // When data is retrieved
        $scope.todos = data;
        $scope.todosLength = data.length;
    })
    .error(function(err) {
        console.log("Error:", err);
    })
    $scope.clickedTodo = function(i) { // When todo is clicked
        let id = $scope.todos[i].id;
        const obj = $scope.todos[i];
        const url = 'http://localhost:3000/todos/'+id;
        const opposite = !obj.finished;
        console.log("Change from to:", obj.finished, !obj.finished);
        console.log("Obj:", obj, "Url:", url);
        $scope.todos[i].finished = opposite;
        TodosService.clickedTodo(url, {finished: opposite})
        .success(function(data) { // When data is retrieved
            console.log("Updated the task!");
        })
        .error(function(err) {
            console.log("Error:", err);
        });
    };
    $scope.addTodo = function() { // When new todo is submitted
        $scope.todosLength += 1;
        const url = 'http://localhost:3000/todos/';
        console.log("Url:", url);
        var obj = {
            "id": $scope.todosLength+1,
            "item": $scope.newTodo,
            "finished": false
          }
        $scope.todos.push(obj);
        TodosService.addTodo(url, obj)
        .success(function(data) { // When data is retrieved
            console.log("Added the todo!");
        })
        .error(function(err) {
            console.log("Error:", err);
        });
    };
}]);