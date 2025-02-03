// Declaración de variables
let contenedor, tipoClase;

// Obtener la clase de un elemento
document.querySelector('#obtener').addEventListener('click', () =>{
    contenedor = document.querySelector('.uno');
    tipoClase = contenedor.className;
    console.log(tipoClase);
});

// Añadir una clase a un elemento
document.querySelector('#anadir').addEventListener('click', () =>{
    contenedor = document.querySelector('.uno');
    contenedor.classList.add('rojo');
});

// Borrar una clase de un elemento
document.querySelector('#borrar').addEventListener('click', () =>{
    contenedor = document.querySelector('.uno');
    contenedor.classList.remove('rojo');
});

// Reemplazar una clase de un elemento
document.querySelector('#sustituir').addEventListener('click', () =>{
    contenedor = document.querySelector('.uno');
    contenedor.classList.replace('rojo', 'rojo2');
});

// Activar / Desactivar una clase
document.querySelector('#activar').addEventListener('click', () =>{
    contenedor = document.querySelector('.dos');
    contenedor.classList.toggle('verde');
});

// Cambiar estilos
document.querySelector('#cambiar').addEventListener('click', () =>{
    contenedor = document.querySelector('.tres');
    contenedor.style.borderRadius = '50%';
});