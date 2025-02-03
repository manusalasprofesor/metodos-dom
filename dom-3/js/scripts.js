// Aplicamos negrita
document.querySelector('#negrita').addEventListener('click', ()=>{
    document.querySelector('p').setAttribute('class', 'negrita');
});

// Aplicamos normal
document.querySelector('#normal').addEventListener('click', () =>{
    document.querySelector('p').removeAttribute('class', 'negrita');
});

