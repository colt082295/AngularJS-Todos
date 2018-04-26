app.factory('TodoService', ['$http', function($http) {

    var getTodo = function(id) {
        return $http.get('http://localhost:3000/todos/'+id)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })
    };

    var updateTodo = function(url, obj) {
        return $http({
            method: 'PATCH',
            url: url,
            headers: {
                'Content-Type': 'application/json'
                },
            data: obj,
            })
        .success(function(data) {
            console.log("Updated the todo to finished!");
            return data;
        })
        .error(function(err) {
            console.log("Error trying to update the todo to finished!");
            return err;
        })
    };

    return {
        getTodo: getTodo,
        updateTodo: updateTodo,
    }
}])