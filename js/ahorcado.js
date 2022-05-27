//VARIABLES
let iniciarJuego = false;
let errores = 0;
let palabra,
  letrasPalabra,
  letrasIngresadas,
  letrasCorrectas,
  letrasIncorrectas,
  tecla,
  lineas;
let click = -1;
let entrada = "";
let listasDepalabras = [];
let palabrasInvalidas = [];
let palabrasValidas = [];
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");

//BOTÓN INICIAR JUEGO
let botonIniciarJuego = document.querySelector("#boton-iniciar-juego");
//BOTÓN E INPUT
let botonAgregarPalabra = document.querySelector("#boton-agregar-palabra");
let ingresarNuevaPalabra = document.querySelector("#ingresar-nueva-palabra");
let textoBoton = document.querySelector("#texto-boton");

//INPUT INVISIBLE PARA INGRESAR TECLAS
let inputInvisible = document.querySelector("#input-teclado");
let subcontenedor = document.querySelector("#subcontenedor");

//Evento para (re)iniciar el juego
botonIniciarJuego.addEventListener("click", function (event) {
  event.preventDefault();
  inputInvisible.blur();

  //Sonido del botón
  audio2.load();
  audio2.play();
  apagar(); //apagar animaciones (si las hay)

  //Traigo la lista de palabras del JSON
  fetch(
    "https://github.com/ayelenleclerc/proyectoFinal-JS-CH/blob/main/js/palabrasAhorcado.JSON"
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((palabrasAhorcado) => {
        listasDepalabras.push(palabrasAhorcado);
      });
    });
  //Empieza la partida
  console.log(listasDepalabras);

  //   inputInvisible.focus();
  //   iniciarJuego = true;
  //   errores = 0;
  //   palabra = palabraAleatoria();
  //   iniciarDibujo(palabra);
  //   letrasPalabra = letrasSinRepetir(palabra);
  //   letrasIngresadas = [];
  //   letrasCorrectas = [];
  //   letrasIncorrectas = [];
  //   lineas = calcularLineas();
  //   escribirLetrasCorrectas(lineas);
  // });

  // //Las entradas por teclado (suave o físico) se activan al hacer click en la zona del canvas o sus laterales
  // subcontenedor.addEventListener("click", function (event) {
  //   if (iniciarJuego) {
  //     event.preventDefault();
  //     inputInvisible.focus();
  //   }
  // });

  // //Evento para ingresar letras a la partida
  // inputInvisible.addEventListener("input", function () {
  //   tecla = inputInvisible.value.toUpperCase(); //Toma solo UNA letra
  //   inputInvisible.value = "";
  //   if (iniciarJuego) {
  //     //sólo corre si el juego está iniciado y no se está agregando una palabra
  //     if (teclaValida(tecla)) {
  //       //valida el tipo de tecla ingresada
  //       if (!contiene(tecla, letrasIngresadas)) {
  //         //evalua si ya se ingreso dicha letra
  //         letrasIngresadas.push(tecla);
  //         letrasIngresadas.sort();
  //         if (contiene(tecla, letrasPalabra)) {
  //           //evalua si la palabra contiene dicha letra
  //           letrasCorrectas.push(tecla);
  //           letrasCorrectas.sort();
  //           lineas = transcribirLetra(lineas, tecla);
  //           limpiarPantalla(0, alto * 0.75, ancho, alto);
  //           escribirLetrasCorrectas(lineas); //Grafica lineas y letras correctas
  //         } else {
  //           errores++;
  //           dibujarErrores(errores);
  //           letrasIncorrectas.push(tecla);
  //           limpiarPantalla(0, alto * 0.62, ancho, alto * 0.1);
  //           escribirLetraIncorrectas(letrasIncorrectas); //Grafica letras incorrectas
  //         }
  //         if (ganar()) {
  //           //Evalua si el usuario ganó la partida
  //           iniciarJuego = false;
  //           inputInvisible.blur();

  //           //Sonido de partida ganada
  //           audio3.load();
  //           audio3.play();

  //           //Texto y efectos
  //           escribir("¡GANASTE!");
  //           on = true;
  //           encender();
  //           hombrecitoSalvado();
  //         }
  //         if (perder()) {
  //           //Evalua si el usuario perdió la partida
  //           iniciarJuego = false;
  //           inputInvisible.blur();

  //           //Sonido de partida perdida
  //           audio4.load();
  //           audio4.play();

  //           //Texto y efectos
  //           escribir("GAME OVER");
  //           dibujarCarita(0.6015, 0.236, false);
  //           palabraCorrecta();
  //         }
  //       }
  //     }
  //   }
  // });

  // setTimeout(() => {
  //   juego.palabras = listasDepalabras;
  // }, 200);
  // //Función para seleccionar una palabra aleatoria del banco de palabras
  // function palabraAleatoria() {
  //   let i = Math.round(Math.random() * (listasDepalabras.length - 1));
  //   return listasDepalabras[i];
  // }

  // //Función que retorna un array con las letras que contiene la palabra aleatoria (ordenadas y sin repetir)
  // function letrasSinRepetir(string) {
  //   let letras = [];
  //   let array = string.split("");
  //   for (let i = 0; i < array.length; i++) {
  //     if (!contiene(array[i], letras)) {
  //       letras.push(array[i]);
  //     }
  //   }
  //   return letras.sort();
  // }

  // /*Validación de la tecla utilizando código ASCII (deja fuera caracteres especiales a excepción de la ñ)*/
  // function teclaValida(tecla) {
  //   return (
  //     (tecla.charCodeAt() >= 65 && tecla.charCodeAt() <= 90) ||
  //     tecla.charCodeAt() == 209
  //   );
  // }

  // //Función para evaluar si un array contiene un letra determinada
  // function contiene(elemento, lista) {
  //   return lista.includes(elemento);
  // }

  // //Función para evaluar si el usuario ganó la partida
  // function ganar() {
  //   return letrasCorrectas.length == letrasPalabra.length;
  // }

  // //Función para evaluar si el usuario perdió la partida
  // function perder() {
  //   return errores == 9;
  // }

  // //AGREGAR_PALABRA

  // //Evento para agregar palabra
  // botonAgregarPalabra.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   inputInvisible.blur();

  //   click *= -1;
  //   if (click > 0) {
  //     entrada = "";
  //     activarAnimacion();

  //     //Sonido normal del botón
  //     audio2.load();
  //     audio2.play();
  //   } else {
  //     entrada = captureInput();
  //     if (!validarEntrada(entrada)) {
  //       //Valida que la palabras ingresadas cumplan con los requisitos
  //       agregarPalabra(entrada, listasDepalabras);
  //       ingresarNuevaPalabra.value = "";
  //       desactivarAnimacion();

  //       //Sonido normal del botón
  //       audio2.load();
  //       audio2.play();
  //     } else {
  //       click = 1;
  //       errorEntrada();

  //       //Sonido de error del botón
  //       audio1.load();
  //       audio1.play();
  //     }
  //   }
  // });

  // ingresarNuevaPalabra.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   inputInvisible.blur();
  // });

  // //Función para capturar la entrada
  // function captureInput() {
  //   return document.querySelector("#ingresar-nueva-palabra").value.toUpperCase();
  // }

  // //Función para validar que las palabras ingresadas tengan entre 3 y 17 letras, y no posean caracteres especiales
  // function validarEntrada(entradas) {
  //   let palabraInvalida = false;
  //   if (entrada.length != 0) {
  //     entrada = entradas.split(" ");
  //     for (let i = 0; i < entrada.length; i++) {
  //       if (entrada[i].length < 3 || entrada[i] > 17) {
  //         palabraInvalida = true;
  //         break;
  //       } else {
  //         for (let j = 0; j < entrada[i].length; j++) {
  //           if (
  //             (entrada[i].charCodeAt(j) < 65 || entrada[i].charCodeAt(j) > 90) &&
  //             entrada[i].charCodeAt(j) != 209
  //           ) {
  //             palabraInvalida = true;
  //             break;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return palabraInvalida;
  // }

  // //Función para verificar que la palabra ingresada no esté repetida
  // function agregarPalabra(entrada, listasDepalabras) {
  //   if (entrada.length != 0) {
  //     entrada.forEach(function (palabra) {
  //       if (!contiene(palabra, listasDepalabras)) {
  //         listasDepalabras.push(palabra);
  //       }
  //     });
  //   }
  // }

  // //ANIMACIONES DEL BOTÓN
  // function activarAnimacion() {
  //   botonAgregarPalabra.classList.remove("desplazar-original-ahorcado");
  //   botonAgregarPalabra.classList.add("desplazar-izquierda-ahorcado");
  //   ingresarNuevaPalabra.style.backgroundColor = "white";
  //   ingresarNuevaPalabra.classList.remove("desplazar-original-ahorcado");
  //   ingresarNuevaPalabra.classList.add("desplazar-derecha-ahorcado");
  //   textoBoton.classList.remove("visible-ahorcado");
  //   textoBoton.classList.add("invisible-ahorcado");
  //   setTimeout(function () {
  //     textoBoton.innerHTML = "Almacenar palabra";
  //     textoBoton.classList.add("visible-ahorcado");
  //   }, 800);
  //   botonAgregarPalabra.blur();
  // }

  // function desactivarAnimacion() {
  //   botonAgregarPalabra.classList.remove("desplazar-izquierda-ahorcado");
  //   botonAgregarPalabra.classList.add("desplazar-original-ahorcado");
  //   ingresarNuevaPalabra.classList.remove("desplazar-derecha-ahorcado");
  //   ingresarNuevaPalabra.classList.add("desplazar-original-ahorcado");
  //   if (entrada.length > 0) {
  //     textoBoton.classList.remove("visible-ahorcado");
  //     textoBoton.classList.add("invisible-ahorcado");

  //     setTimeout(function () {
  //       textoBoton.innerHTML = "¡Se ha guardado correctamente!";
  //       textoBoton.classList.remove("invisible-ahorcado");
  //       textoBoton.classList.add("visible-ahorcado");
  //     }, 800);

  //     setTimeout(function () {
  //       textoBoton.classList.remove("visible-ahorcado");
  //       textoBoton.classList.add("invisible-ahorcado");
  //     }, 1600);

  //     setTimeout(function () {
  //       textoBoton.innerHTML = "Agregar palabras-ahorcado";
  //       textoBoton.classList.remove("invisible-ahorcado");
  //       textoBoton.classList.add("visible-ahorcado");
  //     }, 2400);
  //     botonAgregarPalabra.blur();
  //   } else {
  //     textoBoton.classList.remove("visible-ahorcado");
  //     textoBoton.classList.add("invisible-ahorcado");

  //     setTimeout(function () {
  //       textoBoton.innerHTML = "Agregar palabras";
  //       textoBoton.classList.remove("invisible-ahorcado");
  //       textoBoton.classList.add("visible-ahorcado");
  //     }, 800);
  //     botonAgregarPalabra.blur();
  //   }
  // }

  // function errorEntrada() {
  //   botonAgregarPalabra.classList.remove("desplazar-izquierda-ahorcado");
  //   textoBoton.classList.remove("visible-ahorcado");
  //   textoBoton.classList.add("invisible-ahorcado");
  //   botonAgregarPalabra.classList.add("erratico-derecha-ahorcado");

  //   setTimeout(function () {
  //     textoBoton.innerHTML = "Error. Entrada inválida";
  //     textoBoton.classList.remove("invisible-ahorcado");
  //     textoBoton.classList.add("visible-ahorcado");
  //     botonAgregarPalabra.classList.remove("erratico-derecha-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-izquierda-ahorcado");
  //   }, 100);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-izquierda-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-derecha-ahorcado");
  //   }, 200);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-derecha-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-izquierda-ahorcado");
  //   }, 300);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-izquierda-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-derecha-ahorcado");
  //   }, 400);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-derecha-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-izquierda-ahorcado");
  //   }, 500);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-izquierda-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-derecha-ahorcado");
  //   }, 600);

  //   setTimeout(function () {
  //     botonAgregarPalabra.classList.remove("erratico-derecha-ahorcado");
  //     botonAgregarPalabra.classList.add("erratico-izquierda-ahorcado");
  //   }, 700);

  //   setTimeout(function () {
  //     textoBoton.classList.remove("visible-ahorcado");
  //     textoBoton.classList.add("invisible-ahorcado");
  //   }, 1200);

  //   setTimeout(function () {
  //     textoBoton.innerHTML = "Almacenar palabra";
  //     textoBoton.classList.remove("invisible-ahorcado");
  //     textoBoton.classList.add("visible-ahorcado");
  //     botonAgregarPalabra.classList.remove("erratico-izquierda-ahorcado");
  //     botonAgregarPalabra.classList.add("desplazar-izquierda-ahorcado");
  //   }, 1600);
  //   botonAgregarPalabra.blur();
  // }
  // //CANVAS
  // let screenCanvas = document.querySelector("canvas");
  // let brush = screenCanvas.getContext("2d");

  // let ancho = screenCanvas.width;
  // let alto = screenCanvas.height;

  // //VARIABLES
  // let tamanoPalabra;
  // let tamanoFuente;

  // let salvado;

  // //Función que inicia el dibujo
  // function iniciarDibujo(palabra) {
  //   limpiarPantalla(0, 0, ancho, alto);
  //   dibujarBaseMastil(0.25, 0.55);
  //   tamanoPalabra = palabra.length;
  //   tamanoFuente = ancho / tamanoPalabra;
  //   if (tamanoFuente > 60) {
  //     tamanoFuente = 60;
  //   }
  // }

  // //LIMPIAR PANTALLA
  // function limpiarPantalla(x, y, ancho, alto) {
  //   brush.clearRect(x, y, ancho, alto);
  // }

  // //CALCULAR CANTIDAD DE LINEAS PARA LA PALABRA SECRETA
  // function calcularLineas() {
  //   let lineas = "";
  //   for (let i = 0; i < tamanoPalabra; i++) {
  //     lineas = lineas + "_";
  //     if (i != tamanoPalabra - 1) {
  //       lineas = lineas + " ";
  //     }
  //   }
  //   return lineas;
  // }

  // //SOBREESCRIBIR LETRAS EN LINEAS
  // function transcribirLetra(lineas, tecla) {
  //   let lineasArray = lineas.split("");
  //   for (let i = 0; i < tamanoPalabra; i++) {
  //     if (tecla == palabra[i]) {
  //       lineasArray.splice(i * 2, 1, tecla);
  //     }
  //   }
  //   return lineasArray.join("");
  // }

  // //ESCRIBIR LINEAS Y LETRAS CORRECTAS
  // function escribirLetrasCorrectas(lineas) {
  //   brush.fillStyle = "black";
  //   brush.strokeStyle = "black";
  //   brush.font = "bold " + tamanoFuente + "px Playfair Display";
  //   brush.textAlign = "center";
  //   brush.beginPath();
  //   brush.fillText(lineas, ancho * 0.5, alto * 0.85);
  //   brush.fill();
  // }

  // //ESCRIBIR LETRAS INCORRECTAS
  // function escribirLetraIncorrectas(letrasIncorrectas) {
  //   brush.fillStyle = "red";
  //   brush.strokeStyle = "red";
  //   brush.font = "bold " + tamanoFuente * 0.75 + "px Playfair Display";
  //   brush.textAlign = "center";
  //   brush.beginPath();
  //   brush.fillText(letrasIncorrectas.join(" "), ancho * 0.5, alto * 0.7);
  //   brush.fill();
  // }

  // //ESCRIBIR PALABRA CORRECTA
  // function palabraCorrecta() {
  //   brush.fillStyle = "black";
  //   brush.strokeStyle = "black";
  //   brush.font = "bold 20px Playfair Display";
  //   brush.textAlign = "center";
  //   brush.beginPath();
  //   brush.fillText(
  //     "La palabra correcta era " + palabra,
  //     ancho * 0.5,
  //     alto * 0.95
  //   );
  //   brush.fill();
  // }

  // //DIBUJAR ERRORES
  // function dibujarErrores(errores) {
  //   if (errores <= 3) {
  //     dibujarMastil(0.36, 0.47, errores);
  //   } else {
  //     dibujarHombrecito(0.61, 0.24, errores);
  //   }
  // }

  // //DIBUJAR BASE DE LA HORCA
  // function dibujarBaseMastil(x, y) {
  //   brush.strokeStyle = "black";
  //   brush.lineWidth = 3;
  //   brush.beginPath();
  //   brush.moveTo(ancho * x, alto * y);
  //   brush.lineTo(ancho * (x + 0.22), alto * y);
  //   brush.lineTo(ancho * (x + 0.11), alto * (y - 0.08));
  //   brush.lineTo(ancho * x, alto * y);
  //   brush.lineTo(ancho * (x + 0.1), alto * y);
  //   brush.stroke();
  // }

  // //DIBUJAR RESTO DE LA HORCA
  // function dibujarMastil(x, y, parte) {
  //   brush.strokeStyle = "black";
  //   brush.lineWidth = 3;
  //   switch (parte) {
  //     case 1: //mastil vertical
  //       brush.beginPath();
  //       brush.moveTo(ancho * x, alto * y);
  //       brush.lineTo(ancho * x, alto * (y - 0.3));
  //       brush.stroke();
  //       break;
  //     case 2: //mastil horizontal
  //       brush.beginPath();
  //       brush.moveTo(ancho * x, alto * (y - 0.3));
  //       brush.lineTo(ancho * (x + 0.25), alto * (y - 0.3));
  //       brush.stroke();
  //       break;
  //     case 3: //soga
  //       brush.beginPath();
  //       brush.lineTo(ancho * (x + 0.25), alto * (y - 0.3));
  //       brush.lineTo(ancho * (x + 0.25), alto * (y - 0.265));
  //       brush.stroke();
  //       break;
  //   }
  // }

  // //DIBUJAR HOMRECITO
  // function dibujarHombrecito(x, y, parte) {
  //   brush.strokeStyle = "black";
  //   brush.lineWidth = 3;
  //   switch (parte) {
  //     case 4: //cabeza
  //       brush.beginPath();
  //       brush.arc(ancho * x, alto * y, 18, 0, 2 * Math.PI);
  //       brush.stroke();
  //       break;
  //     case 5: //cuerpo
  //       brush.beginPath();
  //       brush.lineTo(ancho * x, alto * (y + 0.036));
  //       brush.lineTo(ancho * x, alto * (y + 0.15));
  //       brush.stroke();
  //       break;
  //     case 6: //brazo izquierdo
  //       if (salvado) {
  //         brush.beginPath();
  //         brush.lineTo(ancho * x, alto * (y + 0.065));
  //         brush.lineTo(ancho * (x - 0.08), alto * (y + 0.01));
  //         brush.stroke();
  //         break;
  //       } else {
  //         brush.beginPath();
  //         brush.lineTo(ancho * x, alto * (y + 0.06));
  //         brush.lineTo(ancho * (x - 0.05), alto * (y + 0.12));
  //         brush.stroke();
  //         break;
  //       }
  //     case 7: //brazo derecho
  //       if (salvado) {
  //         brush.beginPath();
  //         brush.lineTo(ancho * x, alto * (y + 0.065));
  //         brush.lineTo(ancho * (x + 0.08), alto * (y + 0.01));
  //         brush.stroke();
  //         break;
  //       } else {
  //         brush.beginPath();
  //         brush.lineTo(ancho * x, alto * (y + 0.06));
  //         brush.lineTo(ancho * (x + 0.05), alto * (y + 0.12));
  //         brush.stroke();
  //         break;
  //       }
  //     case 8: //pierna derecha
  //       brush.beginPath();
  //       brush.lineTo(ancho * x, alto * (y + 0.15));
  //       brush.lineTo(ancho * (x + 0.04), alto * (y + 0.25));
  //       brush.stroke();
  //       break;
  //     case 9: //piernza izquierda
  //       salvado = false;
  //       brush.beginPath();
  //       brush.lineTo(ancho * x, alto * (y + 0.15));
  //       brush.lineTo(ancho * (x - 0.04), alto * (y + 0.25));
  //       brush.stroke();
  //       break;
  //   }
  // }

  // //DIBUJAR LA CARITA DEL HOMBRECITO
  // function dibujarCarita(x, y, salvado) {
  //   if (salvado) {
  //     brush.strokeStyle = "black";
  //     brush.lineWidth = 2.5;
  //     brush.beginPath();
  //     brush.arc(ancho * x, alto * y, 1.4, 0, 2 * Math.PI);
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.arc(ancho * (x + 0.03), alto * y, 1.4, 0, 2 * Math.PI);
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.arc(ancho * (x + 0.015), alto * (y + 0.008), 10, 0.35, 0.9 * Math.PI);
  //     brush.stroke();
  //   } else {
  //     brush.strokeStyle = "red";
  //     brush.lineWidth = 2.5;
  //     brush.beginPath();
  //     brush.lineTo(ancho * x, alto * y);
  //     brush.lineTo(ancho * (x - 0.017), alto * (y - 0.014));
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.lineTo(ancho * x, alto * (y - 0.014));
  //     brush.lineTo(ancho * (x - 0.017), alto * y);
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.lineTo(ancho * (x + 0.017), alto * y);
  //     brush.lineTo(ancho * (x + 0.034), alto * (y - 0.014));
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.lineTo(ancho * (x + 0.017), alto * (y - 0.014));
  //     brush.lineTo(ancho * (x + 0.034), alto * y);
  //     brush.stroke();
  //     brush.beginPath();
  //     brush.arc(
  //       ancho * (x + 0.008),
  //       alto * (y + 0.035),
  //       12,
  //       3.656,
  //       1.84 * Math.PI
  //     );
  //     brush.stroke();
  //   }
  // }

  // //DIBUJAR HOMBRECITO SALVADO
  // function hombrecitoSalvado() {
  //   salvado = true;
  //   limpiarPantalla(0, 0, ancho, alto * 0.58);
  //   dibujarHombrecito(0.5, 0.3, 4);
  //   dibujarHombrecito(0.5, 0.3, 5);
  //   dibujarHombrecito(0.5, 0.3, 6);
  //   dibujarHombrecito(0.5, 0.3, 7);
  //   dibujarHombrecito(0.5, 0.3, 8);
  //   dibujarHombrecito(0.5, 0.3, 9);
  //   dibujarCarita(0.485, 0.292, true);
  // }

  // //ESCRIBIR Y ANIMAR PALABRA
  // function escribir(palabra) {
  //   let color = "red";
  //   let time = setInterval(function () {
  //     if (!iniciarJuego) {
  //       brush.clearRect(0, 0, ancho, alto * 0.11);
  //       brush.fillStyle = color;
  //       brush.strokeStyle = color;
  //       brush.font = "bold 32px Playfair Display";
  //       brush.textAlign = "center";
  //       brush.beginPath();
  //       brush.fillText(palabra, ancho * 0.5, alto * 0.1);
  //       brush.fill();
  //       brush.stroke();
  //       if (color == "red") {
  //         color = "black";
  //       } else {
  //         color = "red";
  //       }
  //     } else {
  //       clearInterval(time);
  //     }
  //   }, 500);
});
