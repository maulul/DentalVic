var nombreUsuario = prompt ("Ingrese su nombre: ")
var apellidoUsuario = prompt ("Ingrese su apellido: ")

var nombreYApellido = nombreUsuario + ' ' + apellidoUsuario

if (nombreUsuario ==  '' || apellidoUsuario == '') {
    alert('Ingrese nombre y apellido')
}

else {
    alert('Bienvenido: ' + ' ' + nombreYApellido)
}