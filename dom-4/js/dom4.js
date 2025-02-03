// Declaración de variables
let nuevoParrafo, parrafosExistentes, ultimoParrafo;

// Función para crear los párrafos
document.querySelector('#crea').addEventListener('click', () =>{
    nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerHTML = 'Esto es un párrafo de nueva creación';
    document.querySelector('.parrafos').appendChild(nuevoParrafo);
});

// Función para borrar los párrafos
document.querySelector('#borra').addEventListener('click', () =>{
    parrafosExistentes = document.querySelectorAll('.parrafos p');
    // console.log(parrafosExistentes.length);
    if (parrafosExistentes.length !== 0){
        ultimoParrafo = parrafosExistentes[parrafosExistentes.length-1];
        ultimoParrafo.parentNode.removeChild(ultimoParrafo);
    }else{
        alert('No hay ningún párrafo a borrar');
    }
    // ultimoParrafo = parrafosExistentes[parrafosExistentes.length-1];
    // ultimoParrafo.parentNode.removeChild(ultimoParrafo);
    // document.querySelector('.parrafos').removeChild(ultimoParrafo);
});