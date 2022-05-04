//defino un clase juegos
class Juego {
  //constructor de la clase
  constructor(id, nombre, descripcion, puntaje) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.puntaje = puntaje;
  }
}
// defino algunos juegos de la página
const juegos = [
  {
    id: 0,
    nombre: "Adivinador",
    descripcion: "Juego de adivinar un numero",
    puntaje: 0,
  },
  {
    id: 1,
    nombre: "Memotest",
    descripcion: "Juego de encontrar el igual",
    puntaje: 0,
  },
  {
    id: 2,
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
