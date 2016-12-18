angular.module('todoApp').directive('todoAlert',function(){

	return{
		templateUrl : 'templates/alerta.html',
		restrict:"AE",
		transclude : true,
		scope : {
			titulo : "@"				
		}

	}
})