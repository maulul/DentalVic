//Array de los datos de los pacientes
const datosPAcientes = []


const VCJson = [{
        "img":"./imagenes/consul.jpeg",
        "title": "Villa crespo",
        "descrip": "Consultorio ubicado en Villa crespo sobre av. Corrientes",
        "boton": "Sacar turno"
    },
    {
        "img":"./imagenes/consul2.jpeg",
        "title": "Lanus",
        "descrip": "Consultorio ubicado en Lanus sobre calle esquiu",
        "boton": "Sacar turno"
    }
]

VCJson.forEach(e => {
    const midiv = document.querySelector(".items")
    const div = document.createElement("div")
    div.classList.add("cardStyle")
    div.innerHTML =
        `   
        <img src=${e.img} alt="" width="500" height="300">
        <h5 class="card-title">${e.title}</h5>                                     
        <p class="card-text">${e.descrip}</p>    
        <a href="./turnos.html" class="btn btn-primary">${e.boton}</a>                           
    `;
    midiv.appendChild(div)
})