import { checkAvg }from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
}
const fragment = document.createDocumentFragment();
const templateStudent = document.getElementById('templateEstudiante').content;

if (typ === 'ESTUDIANTE'){
    for(let i of students){
       const cloneTemp = templateStudent.cloneNode(true);
       cloneTemp.querySelector('.title-card').innerHTML= "Datos del <i>Estudiante</i>";
       cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} 
       APELLIDOS: ${i.apellido.toUpperCase()} `;
       cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${(i.promedio)}`;
       cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.promedio)}`;
       fragment.appendChild(cloneTemp);
    }
    
}else{

}
cardE.appendChild(fragment);

const addStudent = (name, lastName,avg) => {
    //Objeto literal de JS
    let student = {
        nombre : name,
        apellido : lastName,
        promedio : avg
    }
    students.push(student);
    alert('Se agrego estudiante');
};
export {paintCard,addStudent}