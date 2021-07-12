// javaScript para validar formulario una base de datos MySql 

function valida() {
 	
 	var vnombre = document.getElementById('nombre').value;
 	var vcorreo = document.getElementById('correo').value;
 	var vclave = document.getElementById('clave').value;
 	
 	

 	if (vnombre == "" || /^[0-9]*$/.test(vnombre)) {

 		alert("Digite un nombre de usuario correcto.");
 		return false;
 	}

 	if (vcorreo == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(vcorreo)) {

 		alert("Digite un correo válido.");
 		return false;
 	}

 	if (vclave == "" || length(vclave) < 8){

 		alert("Digite una clave de 8 o más carácteres.");
 		return false;
 	}

 } // fin de la función validar