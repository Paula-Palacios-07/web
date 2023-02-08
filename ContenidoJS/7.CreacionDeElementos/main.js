'use strict';
const parrafo2 = document.getElementById('parrafo2');
const mySubtitulo = document.createElement("h2");

//Asignar contenido
mySubtitulo.textContent = "Esto es un subtitulo creado desde JavaScript";
//Agregar atributos al elemento
mySubtitulo.id="sub1";
mySubtitulo.className="subtitulo";
mySubtitulo.style="color:red; font-weight:bold";
mySubtitulo.setAttribute("name","sub1");

//Insertar en el DOM
//document.body.appendChild(mySubtitulo);

parrafo2.appendChild(mySubtitulo);

const parrafo3 = document.createElement("p");
//parrafo3.textContent= "<h3>Sub 3</h3>";
parrafo3.innerHTML ="<h3>Sub3</h3>";
parrafo2.appendChild(parrafo3);