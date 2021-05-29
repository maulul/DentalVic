//Sidebar function
function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


//Funcion que pide los datos del paciente
const pedirDatos = () => {

    let idCount = datosPAcientes.length;
    let nombrePAciente = document.getElementById("name").value;
    let apellidoPaciente = document.getElementById("lastName").value;
    let numeroDni = document.getElementById("DNI").value;
    let consultorioElegido = document.getElementById("consSelect").value;
    let diaElegido = document.getElementsByClassName("form-check-label").value;
    datosPAcientes.push ({id:idCount,Nombre:nombrePAciente,Apellido:apellidoPaciente,DNI:numeroDni,Consultorio:consultorioElegido,Dia:diaElegido});
          

}

//Funcion para mostrar los dias del consultorio
function mostrarDias(){
    var var1 = document.getElementById('consSelect').value;
    var var2 = document.getElementById('vcDays');   
    var var3 = document.getElementById('lDays');
    if(var1=="Villa Crespo"){
        var2.style.display="block";
    }
    else{
        var2.style.display="none";
    }

    if(var1=="Lanus"){
        var3.style.display="block";
    }
    else{
        var3.style.display="none";
    }
}


//Funcion para mostrar los horarios
/*function mostrarHorarios(){
    var var1 = document.getElementById('eleccionDia').value;
    var var2 = document.getElementById('');   
    var var3 = document.getElementById('');
    if(var1=="Villa Crespo"){
        var2.style.display="block";
    }
    else{
        var2.style.display="none";
    }

    if(var1=="Lanus"){
        var3.style.display="block";
    }
    else{
        var3.style.display="none";
    }
}*/