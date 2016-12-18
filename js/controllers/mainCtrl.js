angular.module('todoApp').controller('mainCtrl',function($scope,todosAPI,diassemanaAPI,serial,$location){
		$scope.app = 'Todo App';
		console.log("GERANDOO",serial.gerar())

		todosAPI.getTodos().success(function(resp){
			$scope.todos = resp;
			console.log(resp);
		}).error(function(err){
			$scope.erro = "Aconteceu um erro !";
		});


		$scope.novaTarefa = function(todo){

			todo.serial = serial.gerar();
			todosAPI.saveTodo(todo);
			delete $scope.todo;
			$location.path("/");
		}

		diassemanaAPI.getDias().success(function(resp){
			$scope.diasdasemana= resp;
			console.log(resp);
		}).error(function(err){

			
		});
		/*$scope.diasdasemana = [
			{nome:"Segunda-feira", abrev:"Seg",semana:"meio de semana"},
			{nome:"Terça-feira", abrev:"Ter",semana:"meio de semana"},
			{nome:"Quarta-feira", abrev:"Qua",semana:"meio de semana"},
			{nome:"Quinta-feira", abrev:"Qui",semana:"meio de semana"},
			{nome:"Sexta-feira", abrev:"Sex",semana:"meio de semana"},
			{nome:"Sabado", abrev:"Sab",semana:"fim semana"},
			{nome:"Domingo", abrev:"Dom",semana:"fim semana"},
		];*/
		$scope.excluirTarefas = function(tarefas){
			
			$scope.todos = tarefas.filter(function(elem){
				if(!elem.concluida){
					return elem;
				}
			});
		}

		$scope.temTarefaSelecionada = function(tarefas){
			if(!tarefas)return false;
			var selecionada  = tarefas.some(function(tarefa){
				return tarefa.concluida;
			});
			return selecionada;
		}
	});