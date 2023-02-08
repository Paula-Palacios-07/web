'use strict';
//Split
let cad = "enero_febrero_marzo_abril_mayo_junio";
const myArray2 = [100,2,3,4,5,6,7,8,9,10,11,12,13,14];

//console.log(typeof(cad)); // para saber el tipo de dato
let myArray1 = cad.split("_"); 
//console.log(myArray1);

//metodo Filter
const arrayResult = myArray2.filter((e)=> e > 20);// Funcion tipo flecha anonima
//console.log(arrayResult);

//metodo Push
myArray2.push(450);
//console.log(myArray2);

// metodo map
/*Permite recorrer el array y modificar los elementos presentes en él,
retornando un nuevo array con la misma longitud que el original.*/

const array = [1,2,3,4,5,6,7,8,9,10];
const resultMap = array.map(element => element + 20);
//console.log(resultMap);

//metodo find
/* Recorre el array y retorna la primera coincidencia del elemento que se busca.*/

const find = [1,2,3,4,5,6,7,8,9,10];
const resultFind = array.find(element => element > 6);
//console.log(resultFind);

//metodo concat
/* Se utiliza para unir dos o más arrays. 
Este método no cambia los arrays existentes, sino que devuelve un nuevo array. */

const concat = ['Paula', 'Daniela', 'Camila'];
const concat2 = ['Mateo', 'Samuel', 'Pablo'];
const resultConcat = concat.concat(concat2);
console.log(resultConcat);



