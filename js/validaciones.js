


function validar_nombreUsuario(string) {
	var caracteres = /^[a-zA-Z0-9]+$/;
		if ( string.length >3 && string.length <= 9 && caracteres.test(string) ){

			return true

		}else{
			return false
		}
}
function validar_contrasena(string){
	var caracteres = /^[a-zA-Z0-9]+$/;
		if (string.length >=6  && caracteres.test(string)){

			return true

		}else{
			return false
		}
}




module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena =validar_contrasena;




