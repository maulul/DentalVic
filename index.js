//Array de los datos de los pacientes
const datosPAcientes = []
//Mensaje de bbienvenida a la web
alert ( 'Bienvenido a DentalVic, por favor, ingrese los datos del paciente')

//Funcion que pide los datos del paciente
function pedirDatos () {
    let idCount = datosPAcientes.length;
    let nombrePAciente = prompt ('Ingrese su nombre:');
    let apellidoPaciente = prompt ('Ingrese su apellido:')
    datosPAcientes.push ({id:idCount,Nombre:nombrePAciente,Apellido:apellidoPaciente});
     
     
}

//Loop de agregado de datos de paciente o continuar en la pagina
do {   
        pedirDatos()
        var continueQuest = prompt  ('Desea agregar otro paciente? si/no')

        if (continueQuest == 'si'){            
            
        } else (alert ( 'Ingreso exitoso'))

}while (continueQuest == 'si');
    

