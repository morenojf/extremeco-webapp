// Variables globales
const formulario1 = document.getElementById('formulario1');
const formulario2 = document.getElementById('formulario2');
const formulario3 = document.getElementById('formulario3');
const formulario4 = document.getElementById('formulario4');
const formulario5 = document.getElementById('formulario5');
const formulario6 = document.getElementById('formulario6');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];

// Funciones

const createItem = (actividad) =>{

    let item = {
        actividad: actividad
     
    }

    arrayActividades.push(item);

    return item;
}


const GuardarDB= () =>{
    localStorage.setItem('deportes', JSON.stringify(arrayActividades));

    PintarDB();
}


const PintarDB = () =>{
    listaActividadesUI.innerHTML = "";
    arrayActividades = JSON.parse(localStorage.getItem('deportes'));

    if (arrayActividades === null) {
        
        arrayActividades = [];

    } else{
        arrayActividades.forEach(element => {
            listaActividadesUI.innerHTML += `<tr><th scope="row">-</th></div><td>${element.actividad}<i style="color: red;" class="far fa-2x fa-trash-alt float-right text-center pr-4"><p hidden>delete</p> </i></td></div></tr>`;
        });
  
    }

}

const EliminacionDB = (actividad) =>{
    let indexArray;
    arrayActividades.forEach((elemento, index) => {

        if (elemento.actividad === actividad) {
            indexArray = index;  
        }

        
    });
    
    arrayActividades.splice(indexArray, 1)
    GuardarDB();
}

// Eventos
formulario1.addEventListener('submit', (e)=>{

    e.preventDefault();
    let rafting = document.querySelector("#raftingBtn").value;
    createItem(rafting);
    GuardarDB();


    formulario1.reset();
    
    
});

formulario2.addEventListener('submit', (e)=>{

    e.preventDefault();
    let climbing = document.querySelector("#climbingBtn").value;
    createItem(climbing);
    GuardarDB();

    formulario2.reset();

    
});

formulario3.addEventListener('submit', (e)=>{

    e.preventDefault();
    let paracaidismo = document.querySelector("#paracaidismoBtn").value;
    createItem(paracaidismo);
    GuardarDB();
    
    formulario3.reset();
    
});

formulario4.addEventListener('submit', (e)=>{

    e.preventDefault();
    let parapente = document.querySelector("#parapenteBtn").value;
    createItem(parapente);
    GuardarDB();

    formulario4.reset();
    
});

formulario5.addEventListener('submit', (e)=>{

    e.preventDefault();
    let puentismo = document.querySelector("#puentismoBtn").value;
    createItem(puentismo);
    GuardarDB();

    formulario5.reset();
    
});

formulario6.addEventListener('submit', (e)=>{

    e.preventDefault();
    let tirolesa = document.querySelector("#tirolesaBtn").value;
    createItem(tirolesa);
    GuardarDB();

    formulario6.reset();
    
});

document.addEventListener('DOMContentLoaded', PintarDB);


listaActividadesUI.addEventListener('click', (e)=>{

    e.preventDefault();

    if (e.target.innerText === '') {
        
        EliminacionDB(e.path[2].childNodes[1].innerText);
    }

});


/*let climbing = document.querySelector("#climbingBtn").value;
    let paracaidismo = document.querySelector("#paracaidismoBtn").value;
    let parapente = document.querySelector("#parapenteBtn").value;
    let puentismo = document.querySelector("#puentismoBtn").value;
    let tirolesa = document.querySelector("#tirolesaBtn").value;

    console.log(rafting);
    console.log(climbing); 
    console.log(paracaidismo);
    console.log(parapente);
    console.log(puentismo);
    console.log(tirolesa);
    */ 