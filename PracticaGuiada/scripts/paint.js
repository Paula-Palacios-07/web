import { checkAvg }from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardseProfesores');
const profesores = [];
const students = [];

const paintCard = (typ) =>{
typ = typ.toUpperCase();
const fragment = document.createDocumentFragment();
const templateStudent = document.querySelector('#templateEstudiante').content;
const templateProfesores = document.querySelector('#templateProfesor').content;

if(typ === 'ESTUDIANTE'){
   for(let i of students){
       const cloneTemp = templateStudent.cloneNode(true);
       cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
       cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.
       nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
       cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES:
       ${i.prom}`;
       cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
       fragment.appendChild(cloneTemp);
   }

 }else if (typ === 'PROFESOR'){
  for(let i of profesores){
    const cloneTemp = templateProfesores.cloneNode(true);
    cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Profesor</i>";
    cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nombre_p.toUpperCase()} PROFESIÓN: ${i.apellido_p.toUpperCase()}`;
    cloneTemp.querySelector('.text-promedio').innerHTML = `LA EDAD ES: ${i.edad_p}`;
    fragment.appendChild(cloneTemp);
  } 
}
 cardE.appendChild(fragment);
 cardP.appendChild(fragment);

};

const addProfesores = (name, lastName, avg)=>{
  let profesor = {
    nombre_p : name,
    apellido_p : lastName,
    edad_p: avg
  }
  profesores.push(profesor);
  modalAlert('Se agrego profesor correctamente');
}
const addStudent = (name,lastName,avg) => {
  // Objeto literal de JS
   let student = {
    nom : name,
    ape : lastName,
    prom : avg
   }
   students.push(student);
   modalAlert('Se agrego estudiante corectamente');
};
  const modalAlert=(cad)=>{
  console.log(cad);
  const alerta = document.createElement('div');
  const texto = document.createElement('p');
  const img = document.createElement('img');
  img.src = './img/boton-x.png';
  img.className="close";
  texto.setAttribute("class","textAlerta");
  alerta.setAttribute("id","alerta");
  alerta.setAttribute("class","alerta");
  texto.innerHTML = `<strong>${cad}</strong>`
  alerta.appendChild(img);
  alerta.appendChild(texto);
  document.body.appendChild(alerta);
  img.onclick = function(){
      document.getElementById("alerta").remove();
 }

}

export {paintCard,addStudent,modalAlert,addProfesores}