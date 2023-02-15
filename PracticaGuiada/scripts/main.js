import{ validateString, vAvg, checkAvg} from './validate.js';
import{paintCard, addStudent,modalAlert,addProfesores} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const opcion = document.getElementById('opcion');

// onchange se produce cuando el valor de un elemento se ha cambiado.
//para cambiar el contenido de texto de un elemento de texto

opcion.onchange = function(){
    const op = document.getElementById('opcion').value; 
    if (op === 'profesor'){
        alert("PROFESOR")
        document.querySelector('.valor_1').innerText="Nombres y Apellidos:";
        document.querySelector('.valor_2').innerText="Profesion:";
        document.querySelector('.valor_3').innerText="Edad:";
    } else if (op === 'estudiante'){
        alert("ESTUDIANTE")
        document.querySelector('.valor_1').innerText="Nombres:";
        document.querySelector('.valor_2').innerText="Apellidos:";
        document.querySelector('.valor_3').innerText="Promedio:";
    }
}

/*Generar eventos
  1. Colocando el metodo(eventos) en el atributo onclick, onmouseover, onmouseout de la etiqueta
  2. Mediante propiedad 
  3. Mediante el evento addEvent.....
*/


btnAgregar.onclick = function (){
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const nombre_p = document.getElementById('nombre').value;
    const apellido_p = document.getElementById('apellido').value;
    const edad_p = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value; 
    
  
    if (op === 'estudiante'){
      if (validateString(name) && validateString(lastName) && op !=0){
          if ((!isNaN(avg)) && (vAvg(avg))){
              addStudent(name,lastName,avg)
              document.getElementById('nombre').value="";
              document.getElementById('apellido').value="";
              document.querySelector('#promedio').value="";
          } else {
              document.querySelector('#promedio').value= "";
              modalAlert("Promedio Invalido");
          }
      } else {
          modalAlert("Datos invalidos, revisar campos");
      }
  } else if (op === 'profesor') {
      if (validateString(nombre_p) && validateString(apellido_p) && op !=0){
          if (!isNaN(edad_p)){
              addProfesores(name,lastName,avg)
              document.getElementById('nombre').value="";
              document.getElementById('apellido').value="";
              document.querySelector('#promedio').value="";
          }
      } else {
          modalAlert("Datos invalidos, revisar campos");
      }
  }
}
btnMostrar.addEventListener('click', function(){
  const op = document.getElementById('opcion').value;
  if (op === 'estudiante'){
      paintCard("ESTUDIANTE");
  } else if (op === 'profesor') {
      paintCard("PROFESOR");
  }  
})

