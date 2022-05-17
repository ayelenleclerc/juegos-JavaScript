class Juego {
  constructor(nombre, descripcion, img, puntaje) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
    this.puntaje = puntaje;
  }
}

const juegos = [
  {
    nombre: "Adivinador",
    descripcion: "Juego de adivinar un numero",
    img: "../img/adivinador/giphy-Adivinador.gif",
    puntaje: 0,
  },
  {
    nombre: "Memotest",
    descripcion: "Juego de encontrar el igual",
    img: "../img/memotest/giphy-memotest.gif",
    puntaje: 0,
  },
  {
    nombre: "Encriptador",
    descripcion: "Juego de encriptar un mensaje",
    img: "../img/encriptador/giphy-encriptador.gif",
    puntaje: 0,
  },
];

let puntajeUsuario = [];

if (localStorage.getItem("puntajeUsuario")) {
  puntajeUsuario = JSON.parse(localStorage.getItem("puntajeUsuario"));
} else {
  localStorage.setItem("puntajeUsuario", JSON.stringify(puntajeUsuario));
}

let rankingCard = document.getElementById("app");

juegos.forEach((juego, indice) => {
  rankingCard.innerHTML += `
  <div class="card" id="juego${indice} "style="width: 18rem;">
  <h2 class="card-title">${juego.nombre}</h2> 
      <img src="${juego.img} " class="card-img-top" alt="gif ${juego.nombre} ">
  <div class="card-body">
    <p class="card-text">${juego.descripcion} </p>
    <button type="button" class="btn btn-dark" id="boton${indice}"> Puntuar </button>
  </div>
</div> `;
});
