// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
		navigator.notification.alert("deslizo a la izquierda",function(){"Aplicacion 7","Aceptar"});
		});
		
		$('#derecha').on("swiperight",function(){
			navigator.notificaction.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigfator.notification.vibrate(1000);
					break;
				}
			},"Aplicacion7","Beep,Vibrar,Cancelar");
			
		});
	},false);
 });
					
		