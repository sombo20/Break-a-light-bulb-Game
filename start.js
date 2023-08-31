 var lampada_acesa = document.querySelector("#lampadas_acesa");
		  var lampada_quebrada = document.querySelector("#lampadas_quebradas");
		  var tempo = document.querySelector("#tempo");
		  var urlTempo = window.location.search;
		  var pegarParamsTempo = urlTempo.split("&")[2];
		  var dadosParamsTempo = pegarParamsTempo.split("=")[1];
		  //alert(dadosParamsTempo)
		  
		  var urlLamp = window.location.search;
		  var pegarParamsLamp = urlLamp.split("?")[1];
		  var dadosLampadas = pegarParamsLamp.split("&")[0];
		  var dadosParamsLamp = dadosLampadas.split("=")[1];
		  
		  var urlnome = window.location.search;
		  var dadosnome = urlnome.split("&")[3];
		  var dadosParamsnome = dadosnome.split("=")[1];
		  
		  
		  
		  window.onload = function(){
		  	
		 		var url = window.location.search;
		 		var pegarParams = url.split("&")[1];
		 		var params = pegarParams.split("=")[1]
		 	    //alert(params)
		 	 	params == 1 ||  params == 2  || params == 3 ? iniciarJogo(dadosParamsLamp) : ""
		 	}
		 	
		 	async  function iniciarJogo(quantidade_de_lampadas){
		 	    await criarLampadas(quantidade_de_lampadas);
		 		setInterval(iniciarContagem,500)
		 	}
		 	
		 	
		  async	 function criarLampadas(lampada){
		 			var i =0;
		 		
		 			while(i<lampada){
		 				var lampadas = document.createElement("img")
		 					lampadas.src = "a2.png"
		 					lampadas.style.width="30px"
		 					lampadas.id = "btn"+i
		 					lampadas.style.margin="4px"
		 					lampadas.setAttribute("estado",false)
		 					lampadas.onclick = function(){
		 						var i = this.id
		 						quebrarLampadas(i,lampada)
		 					}

		 				lampada_acesa.innerHTML = lampada
		 				document.querySelector(".cenario").appendChild(lampadas)
		 				i++;
		 			}
		 		}
		 		
		 	
		 		
		 async function iniciarContagem(){
		 		dadosParamsTempo--;
		 		tempo.innerHTML = dadosParamsTempo
		 			if(dadosParamsTempo == -1){
		 				alert("Ops! Estavas quase  "  +dadosParamsnome)
		 				tempo.innerHTML = 0
		 				window.location = "perder.html"
		 			}
		 		}
		 		
		 	var quebradas = 0;
		 async function quebrarLampadas(id,total){
		 	var partirLampada = document.getElementById(id)
		 	var validarbtnClick = partirLampada.getAttribute("estado")
		 	
		 	if(validarbtnClick == "false"){
		 	  //alert(d)
		 	 validarbtnClick = partirLampada.setAttribute("estado",true)
		 	 partirLampada.src = "a1.jpg"
		 	 quebradas = quebradas+1

		 	 dadosParamsLamp = dadosParamsLamp-1
		 	 lampada_acesa.innerHTML = dadosParamsLamp
		 	 lampada_quebrada.innerHTML = quebradas
		 	 if( quebradas == total){
		 	    alert("Você Ganhou: "+dadosParamsnome)
		 	    window.location = "win.html"
		 	  }
		 	}else{
		 	  //alert("Já foi quebrada")
		 	}
		   }
