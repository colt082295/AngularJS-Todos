app.factory('TodosService', ['$http', function($http) {

    var getTodos = function() {
        return $http.get('http://localhost:3000/todos')
        .success(function(data) {
        return data;
        })
        .error(function(err) {
        return err;
        })
    };

    var clickedTodo = function(url, obj) {
        return $http({
            method: 'PATCH',
            url: url,
            headers: {
                'Content-Type': 'application/json'
                },
            data: obj
            })
        .success(function(data) {
            console.log("Updated the todo to finished!", url, obj)
            return data;
        })
        .error(function(err) {
            console.log("Error trying to update the todo to finished!");
            return err;
        })
    };

    var addTodo  = function(url, obj) {
        return $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json'
                },
            data: obj,
            })
        .success(function(data) {
            console.log("Posting the todo is finished!")
            return data;
        })
        .error(function(err) {
            console.log("Error trying to post the todo!");
            return err;
        })
    };

    return {
        getTodos: getTodos,
        addTodo: addTodo,
        clickedTodo: clickedTodo,
    }
}])