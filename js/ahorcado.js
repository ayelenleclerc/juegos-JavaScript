//ARRAYS

let listasDepalabras = [];
let abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let letrasErradas = [];
//VARIABLES
let palabras =
  listasDepalabras[Math.floor(Math.random() * listasDepalabras.length)];

//LLAMADOS AL DOM
let teclado = document.getElementById("teclado");
let espacios = document.getElementById("palabra-a-adivinar");
let btn_jugar = document.getElementById("jugar");
let btn_agregar = document.getElementById("agregar");
let audioing = document.getElementById("audio1");
let audiopop = document.getElementById("audio2");
let audiofantasy = document.getElementById("audio3");
let audiomistery = document.getElementById("audio4");
let input_Usu = document.getElementById("input");
//FUNCIONES

//Traigo la lista de palabras del JSON
fetch("../js/palabrasAhorcado.json")
  .then((res) => res.json())
  .then((palabrasAhorcado) => {
    palabrasAhorcado.forEach((palabrasAhorcado) => {
      listasDepalabras.push(palabrasAhorcado);
    });
  });
console.log(listasDepalabras);
//Traigo el abecedario para crear los botones
for (let i = 0; i < abecedario.length; i++) {
  teclado.innerHTML += ` <button class="letra-ahorcado" id="letra${i}">${abecedario[i]}</button>`;
}
let btn_letra = document.querySelectorAll(".letra-ahorcado");
for (let i = 0; i < btn_letra.length; i++) {
  btn_letra[i].disabled = true;
  btn_letra[i].classList.remove("letra-ahorcado");
  btn_letra[i].classList.add("letra-usada");
}
//agregar palabras
btn_agregar.addEventListener("click", () => {
  input_Usu.value = "";
  input_Usu.classList.remove("invisible-ahorcado");
  input_Usu.classList.add("visible-ahorcado");
  guardarPalabra();
});

function guardarPalabra() {
  input_Usu.addEventListener("change", (e) => {
    let input_newPalabra = document.getElementById("input").value.toUpperCase();
    input_Usu.textContent = e.target.value.toUpperCase();
    listasDepalabras.push(input_newPalabra);
    input_Usu.classList.remove("visible-ahorcado");
    input_Usu.classList.add("invisible-ahorcado");
    Toastify({
      text: "Palabra guardada! Puede iniciar el juego!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  });
}
console.log(listasDepalabras);
//inicio el juego
btn_jugar.addEventListener("click", iniciar);

function iniciar() {
  for (let i = 0; i < btn_letra.length; i++) {
    btn_letra[i].disabled = false;
    btn_letra[i].classList.add("letra-ahorcado");
    btn_letra[i].classList.remove("letra-usada");
  }
  btn_jugar.disabled = true;
  btn_jugar.classList.remove("btn-ahorcado");
  btn_jugar.classList.add("juego-iniciado");
  audiopop.play(btn_jugar);
  btn_agregar.disabled = true;
  btn_agregar.classList.remove("btn-ahorcado");
  btn_agregar.classList.add("juego-iniciado");
}
