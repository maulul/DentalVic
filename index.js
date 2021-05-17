//Guardadoi local
sessionStorage.setItem('proyecto','Lulkin')

//Array de los datos de los pacientes
const datosPAcientes = []


//Mensaje de bbienvenida a la web
alert ( 'Bienvenido a DentalVic, por favor, ingrese los datos del paciente')

//Funcion que pide los datos del paciente
const pedirDatos = () => {

    let idCount = datosPAcientes.length;
    let nombrePAciente = document.getElementById("name").value;
    let apellidoPaciente = document.getElementById("lastName").value;
    let numeroDni = document.getElementById("DNI").value;
    datosPAcientes.push ({id:idCount,Nombre:nombrePAciente,Apellido:apellidoPaciente,DNI:numeroDni});
     
     

}

//Seleccion de consultorio
function consultorio() {
    var x = document.getElementById("consSelect").value;
    document.getElementById("demo").innerHTML = "Elegiste el consultorio: " + x;
}
//Loop de agregado de datos de paciente o continuar en la pagina
/*do {   
        pedirDatos()
        let continueQuest = prompt  ('Desea agregar otro paciente? si/no')

        if (continueQuest == 'si'){            
            
        } else (alert ( 'Ingreso exitoso'))

}while (continueQuest == 'si');*/


    

