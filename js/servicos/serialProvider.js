angular.module('todoApp').provider('serial',function(){

    var tamanho = 5;

    this.setTamanhoSerial = function(tam){
    	tamanho = tam
    }
	this.$get = function(){
		return{
			gerar : function(){
				var serial="";
				while(serial.length < tamanho){
					serial+= String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;
			}
		}
	}
})