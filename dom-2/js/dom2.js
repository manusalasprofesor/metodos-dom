const boton = document.getElementById('boton');

boton.addEventListener('click', () =>{
    let titular1 = document.querySelector('h1').innerHTML;
    alert(`El titular h1 original es: ${titular1}`);

    let titular2 = document.querySelector('h2').innerHTML;
    alert(`El titular h2 original es: ${titular2}`);

    // Modificamos el contenido de los dos titulares
    document.querySelector('h1').innerHTML = `Titular <b>modificado</b>`;

    document.querySelector('h2').textContent = `Titular <em>modificado</em>`;
});