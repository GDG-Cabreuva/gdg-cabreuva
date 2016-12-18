angular.module('todoApp').config(function($routeProvider){

	$routeProvider.when('/',
	{
		templateUrl:"templates/home.html",
		controller : "mainCtrl"
	})
	.when("/novo",
	{
		templateUrl:"templates/novoTodo.html",
		controller:"mainCtrl"
	})


});