angular.module('todoApp').factory('todosAPI',function($http,config){

	var _getTodos = function(){
		return $http.get(config.baseUrl+'/todos');
	}
	var _saveTodo = function(todo){
		$http.post(config.baseUrl+'/todos',todo);
	}
	return{
		getTodos : _getTodos,
		saveTodo : _saveTodo
	}
});