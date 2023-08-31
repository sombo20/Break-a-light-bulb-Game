window.onload = function(){
				var facil = document.querySelector("#facil")
				var medio = document.querySelector("#medio")
				var hard = document.querySelector("#hard")
				
				facil.addEventListener("click",function(){
					var nivel = facil.getAttribute("valor")
					var nome = prompt("Qual o seu nome");
					nome == "" ? nome ="Langa" : ""
					window.location ="start.html?lamp=60&nivel="+nivel+"&tempo=100&nome="+nome;
				});
				
				medio.addEventListener("click",function(){
					var nivel = medio.getAttribute("valor")
					var nome = prompt("Qual o seu nome");
					 nome == "" ? nome ="Langa" : ""
					window.location ="start.html?lamp=80&nivel="+nivel+"&tempo=30&nome="+nome;
				});
				
				hard.addEventListener("click",function(){
					var nivel = hard.getAttribute("valor")
					var nome = prompt("Qual o seu nome");
					nome == "" ? nome ="Langa" : ""
					window.location ="start.html?lamp=55&nivel="+nivel+"&tempo=21&nome="+nome;
				});
			};
