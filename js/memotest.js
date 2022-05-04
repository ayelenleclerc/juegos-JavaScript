const listaCartas = [
  {
    nombre: "ballena",
    img: "../img/memotest/ballena.png",
  },
  {
    nombre: "caballo",
    img: "../img/memotest/caballo.png",
  },
  {
    nombre: "erizo",
    img: "../img/memotest/erizo.png",
  },
  {
    nombre: "gallo",
    img: "../img/memotest/gallo.png",
  },
  {
    nombre: "gato",
    img: "../img/memotest/gato.png",
  },
  {
    nombre: "gorila",
    img: "../img/memotest/gorila.png",
  },
  {
    nombre: "leon",
    img: "../img/memotest/leon.png",
  },
  {
    nombre: "paloma ",
    img: "../img/memotest/paloma.png",
  },
  {
    nombre: "pavoReal",
    img: "../img/memotest/pavoReal.png",
  },
  {
    nombre: "perro",
    img: "../img/memotest/perro.png",
  },
  {
    nombre: "tortuga",
    img: "../img/memotest/tortuga.png",
  },
  {
    nombre: "vaca",
    img: "../img/memotest/vaca.png",
  },
  {
    nombre: "ballena",
    img: "../img/memotest/ballena.png",
  },
  {
    nombre: "caballo",
    img: "../img/memotest/caballo.png",
  },
  {
    nombre: "erizo",
    img: "../img/memotest/erizo.png",
  },
  {
    nombre: "gallo",
    img: "../img/memotest/gallo.png",
  },
  {
    nombre: "gato",
    img: "../img/memotest/gato.png",
  },
  {
    nombre: "gorila",
    img: "../img/memotest/gorila.png",
  },
  {
    nombre: "leon",
    img: "../img/memotest/leon.png",
  },
  {
    nombre: "paloma ",
    img: "../img/memotest/paloma.png",
  },
  {
    nombre: "pavoReal",
    img: "../img/memotest/pavoReal.png",
  },
  {
    nombre: "perro",
    img: "../img/memotest/perro.png",
  },
  {
    nombre: "tortuga",
    img: "../img/memotest/tortuga.png",
  },
  {
    nombre: "vaca",
    img: "../img/memotest/vaca.png",
  },
];

listaCartas.sort(() => 0.5 - Math.random());

const grilla = document.querySelector(".grilla-memotest");
const resultado = document.querySelector("#resultado");
let contador = 0;
let cartaElegida = [];
let cartaElegidaId = [];
let cartasGanadas = [];

//crear tablero
function crearTablero() {
  for (let i = 0; i < listaCartas.length; i++) {
    const carta = document.createElement("img");
    carta.setAttribute("src", "../img/memotest/veredaCuadrados.jpg");
    carta.setAttribute("data-id", i);
    carta.addEventListener("click", seleccionarCarta);
    grilla.appendChild(carta);
  }
}

//verificar si las cartas son iguales
function verificarCarta() {
  const cartas = document.querySelectorAll("img");
  const opcionUnoId = cartaElegidaId[0];
  const opcionDosId = cartaElegidaId[1];

  if (opcionUnoId == opcionDosId) {
    cartas[opcionUnoId].setAttribute(
      "src",
      "../img/memotest/veredaCuadrados.jpg"
    );
    cartas[opcionDosId].setAttribute(
      "src",
      "../img/memotest/veredaCuadrados.jpg"
    );
    alert("¡Ha hecho clic en la misma imagen!");
  } else if (cartaElegida[0] === cartaElegida[1]) {
    // alert("Encontraste el par!");
    cartas[opcionUnoId].setAttribute("src", "../img/memotest/blanco.svg");
    cartas[opcionDosId].setAttribute("src", "../img/memotest/blanco.svg");
    cartas[opcionUnoId].removeEventListener("click", seleccionarCarta);
    cartas[opcionDosId].removeEventListener("click", seleccionarCarta);
    cartasGanadas.push(cartaElegida);
    resultado.textContent = ` ${cartasGanadas.length}`;
  } else {
    cartas[opcionUnoId].setAttribute(
      "src",
      "../img/memotest/veredaCuadrados.jpg"
    );
    cartas[opcionDosId].setAttribute(
      "src",
      "../img/memotest/veredaCuadrados.jpg"
    );
    // alert("No encontraste el par, vuelve a intentarlo!");
  }

  cartaElegida = [];
  cartaElegidaId = [];
  terminarJuego();
}

// defino una función para seleccionar las cartas

function seleccionarCarta() {
  let cartaId = this.getAttribute("data-id");
  cartaElegida.push(listaCartas[cartaId].img);
  cartaElegidaId.push(cartaId);
  this.setAttribute("src", listaCartas[cartaId].img);
  if (cartaElegida.length == 2) {
    setTimeout(verificarCarta, 500);
  }
}
// terminar el juego
function terminarJuego() {
  if (cartasGanadas.length == listaCartas.length / 2) {
    alert("¡Felicidades! Has ganado el juego!");
    setTimeout(location.reload(), 1000);
  }
}

crearTablero();
