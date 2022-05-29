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
let palabrita;
let cant_aciertos = 0;
let cant_errores = 0;

let btn = document.getElementById("jugar-ahorcado");
let imagen = document.getElementById("imagen-ahorcado");
let btn_letras = document.querySelectorAll(".letra-ahorcado");
let tecladoAhorcado = document.getElementById("teclado-ahorcado");

let letraErrada = document.getElementById("letras-erradas");

//Traigo la lista de palabras del JSON
fetch("../js/palabrasAhorcado.json")
  .then((res) => res.json())
  .then((palabrasAhorcado) => {
    palabrasAhorcado.forEach((palabrasAhorcado) => {
      listasDepalabras.push(palabrasAhorcado);
    });
  });

//Traigo el abecedario para crear los botones
for (let i = 0; i < abecedario.length; i++) {
  tecladoAhorcado.innerHTML += ` <button class="letra-ahorcado" id="letra${i}">${abecedario[i]}</button>`;
}

// Inicio el juego
btn.addEventListener("click", iniciar);

function iniciar(event) {
  imagen.src = "../img/ahorcado/img0.png";
  btn.disabled = true;
  btn.classList.add("juego-iniciado");
  btn.classList.remove("btn-ahorcado");

  cant_errores = 0;
  cant_aciertos = 0;
  let parrafo = document.getElementById("palabra-a-adivinar-ahorcado");

  palabrita =
    listasDepalabras[Math.floor(Math.random() * listasDepalabras.length)];

  let cant_letras = palabrita.length;
  console.log(cant_letras);
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
    btn_letras.classList.add("letra-usada");
    btn_letras.classList.remove("letra-ahorcado");
  }

  for (let i = 0; i < cant_letras.length; i++) {
    parrafo.innerHTML += `<span class="letra-oculta-ahorcado" id="letra-oculta${i}">${"_ "}</span>`;
  }
}

// click para adivinar letra

for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras);
}

// funciones para los clicks en las letras
function click_letras(event) {
  const spans = document.querySelectorAll("#palabra-a-adivinar-ahorcado span");
  const button = event.target; //cuál de todas las letras, llamó a la función.
  button.disabled = true;

  const letra = button.innerHTML.toUpperCase();
  const palabra = palabrita.toUpperCase();

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      spans[i].innerHTML = letra;
      cant_aciertos++;
      acerto = true;
    }
  }

  if (acerto == false) {
    cant_errores++;
    const source = `../img/ahorcado/img${cant_errores}.png`;
    imagen.src = source;
  }

  if (cant_errores == 7) {
    document.getElementById("resultado-ahorcado").innerHTML =
      "Perdiste, la palabra era: " + palabrita;

    Swal.fire({
      icon: "error",
      title: "¡Has perdido!",
      text: "La palabra era: " + palabra,
    });

    juegoTerminado();
  } else if (cant_aciertos === palabrita.length) {
    document.getElementById("resultado-ahorcado").innerHTML = "¡Ganaste!";

    Swal.fire({
      icon: "success",
      title: "¡Has ganado!",
      text: " Felicitaciones! ",
    });
    juegoTerminado();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto
  );
}

// fin del juego
function juegoTerminado() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
    btn_letras.classList.add("letra-usada");
    btn_letras.classList.remove("letra-ahorcado");
  }

  btn.disabled = false;
}

juegoTerminado();

//  btnLetra.disabled = true;
//  btnLetra.classList.add("letra-usada");
//  btnLetra.classList.remove("letra-ahorcado");
