let nombrePaciente;
let apellidoPaciente;
let numeroDni;
let consultorioElegido;
let diaElegido;
let horarioElegido;
let vcDays = document.getElementById('vcDays');
let lDays = document.getElementById('lDays');
let lcHours = document.getElementById('lHours');
let vcHours = document.getElementById('vcHours');


//Sidebar function

function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}





//Funcion para mostrar los dias del consultorio y validacion
function mostrarDias() {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let DNI = document.getElementById('DNI').value;

    if (nombre === '' || apellido === '' || DNI === '') {
        alert("Todos los campos son obligatorios");
        return false;
    }


    let consSelect = document.getElementById('consSelect').value;

    if (consSelect == "Villa Crespo") {
        vcDays.style.display = "block";
    } else {
        vcDays.style.display = "none";
    }

    if (consSelect == "Lanus") {
        lDays.style.display = "block";
    } else {
        lDays.style.display = "none";
    }
    return consultorioElegido = consSelect;

}

//Funcion para mostrar los horarios

function mostrarHorarios(event) {
    diaElegido = event.target.value;



    if (diaElegido == "Lunes" || diaElegido == "Miercoles" || diaElegido == "Viernes") {
        lcHours.style.display = "block";

    } else {
        lcHours.style.display = "none";

    }
    if (diaElegido == "Martes" || diaElegido == "Jueves" || diaElegido == "Sabado") {
        vcHours.style.display = "block";


    } else {
        vcHours.style.display = "none";

    }

    return diaElegido;
}

//Funcion que hablita la opcion de confirmar turno y sacar turno nuevo

function obtenerHorario(event) {
    horarioElegido = event.target.value;
    let turnoConfirm = document.getElementById('turnoConfirm');
    let resetForm = document.getElementById('resetForm');

    if (horarioElegido == "14-15 hs" || horarioElegido == "15-16 hs" || horarioElegido == "17-18 hs" ||
        horarioElegido == "9-10 hs" || horarioElegido == "10-11 hs" || horarioElegido == "11-12 hs") {

        turnoConfirm.style.display = "block";
        resetForm.style.display = "block";
    } else {
        turnoConfirm.style.display = "none";
        resetForm.style.display = "none";

    }

    return horarioElegido;

}

//Funcion que guarda los datos del paciente


const pedirDatos = () => {
    idCount = datosPacientes.length;
    nombrePaciente = $('#name').val();
    apellidoPaciente = $('#lastName').val();
    numeroDni = $('#DNI').val();
    datosPacientes.push({
        id: idCount,
        Nombre: nombrePaciente,
        Apellido: apellidoPaciente,
        DNI: numeroDni,
        Consultorio: consultorioElegido,
        Dia: diaElegido,
        Horario: horarioElegido
    })
    localStorage.setItem('Pacientes', JSON.stringify(datosPacientes));

    let pacienteActual = [{
        Nombre: nombrePaciente,
        Apellido: apellidoPaciente,
        DNI: numeroDni,
        Consultorio: consultorioElegido,
        Dia: diaElegido,
        Horario: horarioElegido
    }];

    pacienteActual.forEach(e => {
        const midiv = document.getElementById('infoModal');
        const div = document.createElement("div");
        div.classList.add("modal-info")
        midiv.innerHTML = ""
        div.innerHTML =
            `
            <div class="modal-text">                                              
            <p >Hola ${e.Nombre}, ${e.Apellido}!</p>
            <p> Tienes turno en ${e.Consultorio}  para el dia ${e.Dia}, de ${e.Horario}. </p>
            <p> Gracias por elegirnos! </p>  
            </div>
        `;
        midiv.appendChild(div)
    })

    misTurnosBtn.style.display = "block";
}

//Funcion que vuelca los datos en la pestaña de costado

const miTurno = () => {
    let pacienteActual = [{
        Nombre: nombrePaciente,
        Apellido: apellidoPaciente,
        DNI: numeroDni,
        Consultorio: consultorioElegido,
        Dia: diaElegido,
        Horario: horarioElegido
    }];

    pacienteActual.forEach(e => {
        const midiv = document.getElementById('insideSidebar');
        const div = document.createElement("div");
        div.classList.add("sidebar-info")
        midiv.innerHTML = ""
        div.innerHTML =
            `
            <div class="sidbar-text">                                              
            <p >Hola ${e.Nombre} ${e.Apellido}</p>
            <p> Tienes turno en ${e.Consultorio}  para el dia ${e.Dia} de ${e.Horario} </p>
            <p> Gracias por elegirnos! </p>  
            </div>
        `;
        midiv.appendChild(div)
    })
}

//Funcion para limpiar el formulario

function formReset() {
    document.getElementById("firstForm").reset();
    let resetBtn = document.getElementById('resetForm');
    let turnoConfirm = document.getElementById('turnoConfirm');
    let misTurnosBtn = document.getElementById('misTurnosBtn');
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let DNI = document.getElementById('DNI').value;
    if (nombre === '' || apellido === '' || DNI === '') {
        turnoConfirm.style.display = "none";
        resetBtn.style.display = 'none';
        misTurnosBtn.style.display = 'none';
        vcDays.style.display = "none";
        lDays.style.display = "none";
        lcHours.style.display = "none";
        vcHours.style.display = "none";
    }
};