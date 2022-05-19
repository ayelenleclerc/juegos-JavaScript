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
  0
);
const juego2 = new Juego(
  "Memotest",
  "Juego de encontrar el igual",
  "../img/memotest/giphy-memotest.gif",
  0
);
const juego3 = new Juego(
  "Encriptador",
  "Juego de encriptar un mensaje",
  "../img/encriptador/giphy-encriptador.gif",
  0
);

const juegos = [juego1, juego2, juego3];

let puntajeAdivinador = [];
let puntajeMemotest = [];
let puntajeEncriptador = [];

if (localStorage.getItem("puntajeAdivinador")) {
  puntajeAdivinador = JSON.parse(localStorage.getItem("puntajeAdivinador"));
} else {
  localStorage.setItem("puntajeAdivinador", JSON.stringify(puntajeAdivinador));
}

if (localStorage.getItem("puntajeMemotest")) {
  puntajeMemotest = JSON.parse(localStorage.getItem("puntajeMemotest"));
} else {
  localStorage.setItem("puntajeMemotest", JSON.stringify(puntajeMemotest));
}

if (localStorage.getItem("puntajeEncriptador")) {
  puntajeEncriptador = JSON.parse(localStorage.getItem("puntajeEncriptador"));
} else {
  localStorage.setItem(
    "puntajeEncriptador",
    JSON.stringify(puntajeEncriptador)
  );
}

let rankingCard = document.getElementById("app");

juegos.forEach((juego, indice) => {
  rankingCard.innerHTML += `
  <div class="card" id="juego${indice} "style="width: 18rem;">
  <h2 class="card-title">${juego.nombre}</h2> 
      <img src="${juego.img} " class="card-img-top" alt="gif ${juego.nombre} ">
  <div class="card-body">
    <p class="card-text">${juego.descripcion} </p>
    <p class="card-text" id="puntaje${indice}">Puntaje: ${juego.puntaje}</p>
    <button type="button" class="btn btn-dark" id="boton${indice}"> Puntuar </button>
  </div>
</div> `;
});

juegos.forEach((juego, indice) => {
  let botonPuntaje = document.getElementById(`boton${indice}`);
  botonPuntaje.addEventListener("click", () => {
    let puntaje = juego.puntaje + 1;
    juego.puntaje = puntaje;
    switch (indice) {
      case 0:
        localStorage.setItem("puntajeAdivinador", JSON.stringify(puntaje));
        break;
      case 1:
        localStorage.setItem("puntajeMemotest", JSON.stringify(puntaje));
        break;
      case 2:
        localStorage.setItem("puntajeEncriptador", JSON.stringify(puntaje));
        break;
    }
  });
});

function capturarPuntajesLocalStorage() {
  juegos.forEach((juego, indice) => {
    let puntajeLocal = document.getElementById(`puntaje${indice}`);
    switch (indice) {
      case 0:
        puntajeLocal.innerHTML = `Puntaje: ${parseInt(
          JSON.parse(localStorage.getItem("puntajeAdivinador"))
        )}`;
        break;
      case 1:
        puntajeLocal.innerHTML = `Puntaje: ${parseInt(
          JSON.parse(localStorage.getItem("puntajeMemotest"))
        )}`;
        break;
      case 2:
        puntajeLocal.innerHTML = `Puntaje: ${parseInt(
          JSON.parse(localStorage.getItem("puntajeEncriptador"))
        )}`;
        break;
    }
  });
}

capturarPuntajesLocalStorage();
