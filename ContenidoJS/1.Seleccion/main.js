'use strict';

let myValue = 0;
const value = ()=>{
   myValue = parseFloat(prompt("Introduzca un valor"));
   return myValue;
};

const testValue = (value)=>{
   /* switch(value){
        case 1: console.log("Presiono 1");
        break;
        case 2: console.log("Presiono 2");
        break;
        default: console.log("Otro valor");
    }*/

    switch(true){
        case value>=0 && value <3 : alert
        ("aplazado"); break;
        case value>=3 && value <5 : alert
        ("aprobado"); break;
        default: console.log("Error en valor");

    }
};



let respuesta = value();
testValue(respuesta);