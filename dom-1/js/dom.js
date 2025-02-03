// Declaración de variables
let a, b, c, d, e;

// Acceso al contenido de un objeto con atributo ID
a = document.getElementById('identificador').innerHTML;
console.log(`El contenido del primer párrafo es: ${a}`);

// Acceso a los elementos con una determinada clase
b = document.getElementsByClassName('clase');
console.log(`Número de elementos con la clase "clase": ${b.length}`);
console.log(`El contenido del segundo elemento del array es: ${b[1].textContent}`);

// Acceso a los elementos por su etiqueta
c = document.getElementsByTagName('h2');
console.log(`Número de titulares h2: ${c.length}`);
console.log(`Contenido del titular número 2: ${c[1].innerHTML}`);

// Selectores comodín
d = document.querySelector('h1').innerHTML;
console.log(`El contenido del titular h1 es: ${d}`);

e = document.querySelectorAll('p');
console.log(`El número total de párrafos es: ${e.length}`);