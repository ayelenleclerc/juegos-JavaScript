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

//VARIABLES
let palabra;
let palabrita = "";
let cant_aciertos = 0;
let cant_errores = 0;
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
let errores = document.getElementById("resultado");
let spans = document.querySelectorAll(".espacio-ahorcado");
let imagen = document.getElementById("imagen");
//FUNCIONES

//Traigo la lista de palabras del JSON
fetch("../js/palabrasAhorcado.json")
  .then((res) => res.json())
  .then((palabrasAhorcado) => {
    palabrasAhorcado.forEach((palabrasAhorcado) => {
      listasDepalabras.push(palabrasAhorcado);
    });
  });
console.log(listasDepalabras); //verificacion de que funciona fetch

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

    audioing.play(btn_agregar);
  });
}
console.log(listasDepalabras); // verificacion de que las guarda

//inicio el juego
btn_jugar.addEventListener("click", iniciar);

function iniciar(event) {
  imagen.src = "../img/ahorcado/img0.png";
  btn_letra.disabled = true;
  cant_errores = 0;
  cant_aciertos = 0;

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

  generarPalabra();
}

// funcion para generar la palabra a adivinar

function generarPalabra() {
  let palabra =
    listasDepalabras[Math.floor(Math.random() * listasDepalabras.length)];
  for (let i = 0; i < palabra.length; i++) {
    espacios.innerHTML += `<span class="espacio-ahorcado" id="espacio${i}">${"_ "}</span>`;
  }
  palabrita = palabra;
  console.log(palabra); // verificacion de palabra
}
//************************************************************************** */
//funcionalidad del juego
for (let i = 0; i < btn_letra.length; i++) {
  btn_letra[i].addEventListener("click", (event) => {
    let spans = document.querySelectorAll(".espacio-ahorcado");

    spans.forEach((span) => {
      if (span.textContent === "_" && letra == palabra[i]) {
        span.textContent = letra;
      }
    });

    let letra = event.target.textContent;
    btn_letra[i].disabled = true;
    btn_letra[i].classList.remove("letra-ahorcado");
    btn_letra[i].classList.add("letra-usada");

    console.log(letra); // verificacion

    let acerto = false;
    for (let i = 0; i < palabrita.length; i++) {
      if (letra === palabrita[i]) {
        acerto = true;
        cant_aciertos++;
        spans[i].innerHTML = `${letra}`;
        console.log(acerto);
      }
    }
    if (acerto == false) {
      cant_errores++;
      imagen.src = `../img/ahorcado/img${cant_errores}.png`;
      console.log(acerto);
    }

    if (cant_errores == 7) {
      Swal.fire({
        icon: "error",
        title: "¡Has perdido!",
        text: "La palabra era: " + palabrita,
      });
      audiomistery.play();
      game_over();
    } else if (cant_aciertos === palabrita.length) {
      Swal.fire({
        icon: "success",
        title: "¡Has ganado!",
        text: " Felicitaciones! ",
      });
      audiofantasy.play();
      game_over();
    }
  });
}

function game_over() {
  btn_jugar.disabled = false;
  btn_jugar.classList.add("btn-ahorcado");
  btn_jugar.classList.remove("juego-iniciado");
  btn_agregar.disabled = false;
  btn_agregar.classList.add("btn-ahorcado");
  btn_agregar.classList.remove("juego-iniciado");

  setTimeout(function () {
    location.reload();
  }, 5000);
}
