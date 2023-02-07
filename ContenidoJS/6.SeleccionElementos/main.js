'use strict'

//Seleccion por id
const art1 = document.getElementById('art1');
console.log(art1);

//Seleccion por id con queryselector
const art2 = document.queryselector('#art2');
console.log(art2);

//seleccion por name
const contenedor = document.getElementsByName("contenedor");
console.log(contenedor);

// seleccion por clase
const titulo = document.getElementsByClassName('Titulo');
console.log(titulo);

//seleccion porqueryselector clase

//seleccionar tods los elementos
const li = document.querySelectorAll("li");
console.log(i);

const button = document.querySelector('#enviar');

button.addEventListener('click',()=>{
   const name = document.getElementById('name').value;
   alert(`Hola ${name}`);
});