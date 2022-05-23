/*

//defino un clase juegos
class Juego {
  constructor(nombre, descripcion, puntaje) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.puntaje = puntaje;
  }
}

const juegos = [
  {
    nombre: "Adivinador",
    descripcion: "Juego de adivinar un numero",
    puntaje: 0,
  },
  {
    nombre: "Memotest",
    descripcion: "Juego de encontrar el igual",
    puntaje: 0,
  },
  {
    nombre: "Encriptador",
    descripcion: "Juego de encriptar un mensaje",
    puntaje: 0,
  },
];

// defino una función  donde saludo al usuario y le pregunto los puntajes para valorar los juegos de la pagina

function saludo() {
  let nombre = prompt("¡Hola! Como te llamas?");
  return alert(
    `¡Hola ${nombre}! Bienvenido al ranking de los juegos, espero que puedas disfrutar de nuestros juegos y puedas calificarlos.`
  );
}

// defino una función para preguntar los puntajes de los juegos
function preguntarPuntajes() {
  let puntajeAdivinador = 0;
  let puntajeMemotest = 0;
  let puntajeEncriptador = 0;
  let idJuego = parseInt(
    prompt(
      "Cuál juego deseas calificar?\n 0. Adivinador\n 1. Memotest\n 2. Encriptador\n Por favor indica un número entre 0 y 2"
    )
  );

  juegos.forEach((juego) => {
    // recorro el array de juegos
    if (juego.id === idJuego) {
      // si el id del juego coincide con el id del juego que se quiere calificar
      switch (idJuego) {
        case 0: // si el id del juego coincide con el id del juego que se quiere calificar
          puntajeAdivinador++; // sumo un punto al puntaje del juego
          break;
        case 1:
          puntajeMemotest++;
          break;
        case 2:
          puntajeEncriptador++;
          break;
        default:
          alert("Por favor, selecciona un número entre 0 y 2");
      }
    }
  });
  return alert(
    `¡Gracias por tu colaboración! \n\n Tu puntaje ha sido registrado en el ranking de los juegos\n\n Adivinador ${puntajeAdivinador}\n Memotest ${puntajeMemotest}\n Encriptador ${puntajeEncriptador} \n\n Muchas gracias.`
  );
}
saludo();
preguntarPuntajes();

let juegos = [];

class Juego {
  constructor(nombre, descripcion, img, puntaje) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
    this.puntaje = puntaje;
  }
}

const juego1 = new Juego(
  "Adivinador",
  "Juego de adivinar un numero",
  "../img/adivinador/giphy-Adivinador.gif",
  "0"
);
const juego2 = new Juego(
  "Memotest",
  "Juego de encontrar el igual",
  "../img/memotest/giphy-memotest.gif",
  "0"
);
const juego3 = new Juego(
  "Encriptador",
  "Juego de encriptar un mensaje",
  "../img/encriptador/giphy-encriptador.gif",
  "0"
);

juegos.push(juego1);
juegos.push(juego2);
juegos.push(juego3);

let puntajeTotal = localStorage.getItem("puntajeTotal");

if (puntajeTotal) {
  puntajeTotal = puntajeTotal;
} else {
  JSON.stringify(
    localStorage.setItem("puntajeTotal", [
      juego1.puntaje,
      juego2.puntaje,
      juego3.puntaje,
    ])
  );
}

// CREO LAS CARDS PARA LOS JUEGOS
let rankingCard = document.getElementById("app");

juegos.forEach((juego, indice) => {
  rankingCard.innerHTML += `
  <div class="card card-puntaje" id="juego${indice}>
  <h2 class="card-title__puntaje">${juego.nombre}</h2> 
      <img src="${juego.img} " class="card-img-top img-puntaje" alt="gif ${
    juego.nombre
  } ">
  <div class="card-body">
    <p class="card-text p-puntaje">${juego.descripcion} </p>
    <p class="card-text p-puntaje" id="puntaje${indice}">Puntaje: ${localStorage.getItem(
    "puntajeTotal"
  )}</p>
    <button type="button" class="btn btn-dark btn-puntaje" id="boton${indice}"> Puntuar </button>
  </div>
</div> `;
});

//CAPTURO EL PUNTAJE DEL JUEGO
function capturarPuntaje() {
  juegos.forEach((juego, indice) => {
    let botonPuntaje = document.getElementById(`boton${indice}`);
    botonPuntaje.addEventListener("click", () => {
      let puntaje = juego.puntaje + 1;
      juego.puntaje = puntaje;
      localStorage.setItem("puntajeTotal", puntaje);
    });
  });
}
capturarPuntaje();
// document.getElementById(`puntaje${indice}`).innerHTML = `Puntaje: ${puntaje}`;
*/
