angular.module('todoApp').service('diassemanaAPI',function($http,config){


	var _getDias = function(){
		return $http.get(config.baseUrl+'/dias');
	}

	this.getDias = _getDias;
});