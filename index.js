//Array de los datos de los pacientes
const datosPAcientes = []

const VCJson = [

    {
        "title": "Villa crespo"
    ,
    
        "descrip": "Consultorio ubicado en Villa crespo sobre av. Corrientes"
    ,
    
        "boton": "Sacar turno"
    }

]

VCJson.forEach(e => {
    const midiv = document.querySelector(".VCBody")
    const div = document.createElement("div")

    div.innerHTML =
        `                              
    <h5 class="card-title">${e.title}</h5>                                     
    <p class="card-text">${e.descrip}</p>    
    <a href="./turnos.html" class="btn btn-primary">${e.boton}</a>
    `;

    midiv.appendChild(div)


})

const LJson = [

    {
        "titleL": "Lanus"
    ,
    
        "descripL": "Consultorio ubicado en Lanus sobre calle esquiu"
    ,
    
        "botonL": "Sacar turno"
    }

]

LJson.forEach(e => {
    const midiv = document.querySelector(".LBody")
    const div = document.createElement("div")

    div.innerHTML =
        `                              
    <h5 class="card-title">${e.titleL}</h5>                                     
    <p class="card-text">${e.descripL}</p>    
    <a href="./turnos.html" class="btn btn-primary">${e.botonL}</a>
    `;

    midiv.appendChild(div)


})

