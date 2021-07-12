// javaScript para validar formulario una base de datos MySql 

function validacion() {
 	
 	var vcontrol = document.getElementById('control').value;
 	var vprecio = document.getElementById('precio').value;
 	var vmarca = document.getElementById('marca').value;
 	var vfecha = document.getElementById('fecha').value;
 	var vcantidad = document.getElementById('cantidad').value;
 	var vtotal = document.getElementById('total').value;
 	var vcliente = document.getElementById('cliente').value;


 	if (vcontrol == "" || /^[0-9]*$/.test(vcontrol)) {

 		alert("Por favor digite el nombre del mando.");
 		return false;
 	}

 	if (vprecio == "" || /^[a-zA-Z]*$/.test(vprecio)) {

 		alert("Por favor digite el precio correcto.");
 		return false;
 	}

 	if (vmarca == "" || /^[0-9]*$/.test(vmarca)) {

 		alert("Por favor digite el nombre de la marca.");
 		return false;
 	}

	if (vfecha == "") {

		 alert("Por favor digite la fecha.");
		 return false;
	}

	if (vcantidad == "" || /^[a-zA-Z]*$/.test(vcantidad)) {

		alert("Por favor digite la cantidad.");
		return false;
	}

	if (vtotal == "" || vtotal <= 0 || /^[a-zA-Z]*$/.test(vtotal)) {

		alert("Por favor digite el total de su compra.");
		return false;
	}

 	if (vcliente== "" || length(vcliente)) {

 		alert("Digite un nombre de cliente usuario correcto.");
 		return false;
 	}

 } // fin de la función validar