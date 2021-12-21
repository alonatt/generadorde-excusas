import "bootstrap";
import "./style.css";

function generateRandom(array) {
  let rango_maximo = array.length;
  let aleatorio = Math.floor(Math.random() * (rango_maximo - 0) + 0);
  return aleatorio;
}

function generarOracion() {
  let who = [
    "Mi perro",
    "Mi gato",
    "Mi hija",
    "Mi amigo",
    "Mi mamá",
    "Mi papá",
    "Mi vecino"
  ];
  let action = ["guardo", "rego", "salto", "lloro", "jugo"];
  let what = [
    "mi tarea",
    "mi trabajo",
    "el reloj ",
    "la piscina",
    "la casa",
    "el auto"
  ];
  let when = [
    "ayer",
    "en las vaciones",
    "cuando fue al negocio",
    "en su fiesta ",
    "cuando dormia"
  ];
  let oracion =
    who[generateRandom(who)] +
    " " +
    action[generateRandom(action)] +
    " " +
    what[generateRandom(what)] +
    " " +
    when[generateRandom(when)];
  return oracion;
}
const boton = document.getElementById("boton");
let contador = 0;

window.onload = function() {
  document.querySelector("#Generador").innerHTML = generarOracion();
};

boton.onclick = function() {
  contador += 1;
  if (contador >= 5) {
    alert("No hay excusas");
    document.querySelector("#Generador").innerHTML = "Se acabaron las excusas";
    boton.innerText = "No hay mas excusas";
    boton.disabled = true;
  } else {
    alert("Ya Van: " + contador + " excusas");
    document.querySelector("#Generador").innerHTML = generarOracion();
  }
};
