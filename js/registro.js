


let registros = [];

function agregarRegistro(){
    var items = {
        'usuario':document.getElementById('in_usuario').value,
        'contrasena':document.getElementById('in_contrasena').value,
    }
    registros.push(items);
    return items
}

function filtarPorContrasena(arreglo, filtro){

    const result = arreglo.filter(word => word.length >= 6);

    return console.log(result)

}





module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtarPorContrasena = filtarPorContrasena;


