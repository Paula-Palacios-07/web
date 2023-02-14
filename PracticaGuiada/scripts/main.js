import{ validateString, vAvg, checkAvg} from './validate.js';
import{paintCard, addStudent,modalAlert} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*Generar eventos
  1. Colocando el metodo(eventos) en el atributo onclick, onmouseover, onmouseout de la etiqueta
  2. Mediante propiedad 
  3. Mediante el evento addEvent.....
*/


btnAgregar.onclick = function (){
    //console.log('Evento mediante propiedad');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    //console.log(`${name} ${lastName} ${avg} ${op}`);


if(validateString(name) && validateString(lastName) && op != 0){
   if((!isNaN(avg)) && (vAvg(avg))){
    addStudent(name,lastName,avg)
   }else{
    document.querySelector('#promedio').value="";
    modalAlert("Promedio Invalido");
   }

}else{
  modalAlert("Datos invalidos, revisar los datos");
}
}
btnMostrar.addEventListener("click", function(){
  paintCard("ESTUDIANTE");

});

