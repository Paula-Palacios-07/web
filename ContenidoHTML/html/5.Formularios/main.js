'use strict'
let boton = document.getElementById('enviar');
const formulario = document.getElementById('form');
//let myH1 = document.getElementsByName('name');
let myH1 = document.getElementsByTagName('h1');
console.log(myH1);

/*boton.addEventListener('click',  (e)=>{
    e.preventDefault();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
    console.log(formulario[3].value);
});*/

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e.target[1].value);
});

//console.log(boton)









//Variable o contenedores 
// Una variable es un espacio de memoria que puede cambiar en el tiempo de ejecucion del problema
// Una constante es un espacio de memoria y su valor no cambia en el tiempo de ejecucion del problema
// var es local
// let es local
/*var numero1 = 13;
let numero2 = 25;
const IVA = 19.1

if(true){
    let numero2 = 50;
    console.log(numero2);
}

console.log(numero2);

console.log(numero2)*/

