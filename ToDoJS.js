var Ingresar = document.getElementById("Ingresar");
var tarea = document.getElementById("tarea");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function Vacio(){
	return tarea.value.length;
} 

function AñadirTarea(){
	if (Vacio() > 0) { 
		CrearLista();
	}
}

function CrearLista() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(tarea.value)); 
	ul.appendChild(li); 
	tarea.value = "";

	function Delete(){
		li.parentNode.removeChild(li);
	}
	
	var remover = document.createElement("button");
	remover.appendChild(document.createTextNode("X"));
	li.appendChild(remover);
	remover.addEventListener("click", Delete);

	function Finalizar() {
		li.classList.toggle("complete");
	}

	li.addEventListener("click",Finalizar);

}

Ingresar.addEventListener("click",AñadirTarea);
