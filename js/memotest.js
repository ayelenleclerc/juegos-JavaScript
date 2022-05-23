class Carta {
  constructor(nombre, img) {
    this.nombre = nombre;
    this.img = img;
  }
}
const listaCartas = [];
listaCartas.push(new Carta("ballena", "../img/memotest/ballena.png"));
listaCartas.push(new Carta("caballo", "../img/memotest/caballo.png"));
listaCartas.push(new Carta("erizo", "../img/memotest/erizo.png"));
listaCartas.push(new Carta("gallo", "../img/memotest/gallo.png"));
listaCartas.push(new Carta("gato", "../img/memotest/gato.png"));
listaCartas.push(new Carta("gorila", "../img/memotest/gorila.png"));
listaCartas.push(new Carta("leon", "../img/memotest/leon.png"));
listaCartas.push(new Carta("paloma", "../img/memotest/paloma.png"));
listaCartas.push(new Carta("perro", "../img/memotest/perro.png"));
listaCartas.push(new Carta("pavoReal", "../img/memotest/pavoReal.png"));
listaCartas.push(new Carta("tortuga", "../img/memotest/tortuga.png"));
listaCartas.push(new Carta("vaca", "../img/memotest/vaca.png"));
listaCartas.push(new Carta("ballena", "../img/memotest/ballena.png"));
listaCartas.push(new Carta("caballo", "../img/memotest/caballo.png"));
listaCartas.push(new Carta("erizo", "../img/memotest/erizo.png"));
listaCartas.push(new Carta("gallo", "../img/memotest/gallo.png"));
listaCartas.push(new Carta("gato", "../img/memotest/gato.png"));
listaCartas.push(new Carta("gorila", "../img/memotest/gorila.png"));
listaCartas.push(new Carta("leon", "../img/memotest/leon.png"));
listaCartas.push(new Carta("paloma", "../img/memotest/paloma.png"));
listaCartas.push(new Carta("perro", "../img/memotest/perro.png"));
listaCartas.push(new Carta("pavoReal", "../img/memotest/pavoReal.png"));
listaCartas.push(new Carta("tortuga", "../img/memotest/tortuga.png"));
listaCartas.push(new Carta("vaca", "../img/memotest/vaca.png"));

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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Ha hecho clic en la misma imagen!",
    });
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
    Swal.fire({
      icon: "success",
      title: "Felicitaciones",
      text: "Has ganado el juego",
    });

    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}

crearTablero();
