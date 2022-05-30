// Llamo a los elementos a utilizar y declaro las variables que necesito
let adivinador = document.getElementById("adivinadorApp");
let adivinadorNumber = document.getElementById("adivinadorNumber");
let inicioAdivinador = document.getElementById("inicioAdivinador");

// Hago que el boton de inicio me mande al input para ver lo que pone el usuario

inicioAdivinador.addEventListener("click", () => {
  adivinador.classList.add("hide");
  adivinadorNumber.classList.add("show");
});

// defino una función para que tome el numero del usuario

function pedirNumero() {
  let inputUsuario = document.getElementById("adivinadorInput");
  let numeroElegido = parseInt(inputUsuario.value);
  return numeroElegido;
}
// hago la funcion del juego y comparo lo que ingresa el usuario con el numero generado por el Math.random()

function juego() {
  //declaro las variables la cantidad de intentos y el contador
  let adivinadorNumber = document.getElementById("adivinadorNumber");
  let adivinadorResultado = document.getElementById("adivinadorResultado");
  let numeroPensado = Math.round(Math.random() * 10);
  let numeroElegido = pedirNumero();

  if (numeroElegido !== numeroPensado) {
    // si el numero del usuario es diferente al numero generado por el Math.random()

    adivinadorNumber.classList.remove("show");
    setTimeout(() => {
      adivinadorResultado.classList.add("show");
    }, 500);
    resultadoAdivinador.innerHTML = `<p>¡Lo siento, has perdido! El numero pensado era ${numeroPensado} </p>`;
  } else {
    // si el numero del usuario es igual al numero generado por el Math.random()

    adivinadorNumber.classList.remove("show");
    adivinadorResultado.classList.add("show");
    resultadoAdivinador.innerHTML = `<p>¡Has ganado!</p>`;
  }
}

// defino el evento para que inicie el juego despues de que el usuario ingresa el numero
let adivinadorInput = document.getElementById("adivinadorInput");
adivinadorInput.addEventListener("keyup", () => {
  if (adivinadorInput.value.length === 1 && !isNaN(adivinadorInput.value)) {
    juego();
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Por favor ingresa un número",
      showConfirmButton: false,
      timer: 1500,
    });
    adivinadorInput.value = "";
  }
});
// despues de 8 segundos reinicio la pagina para que empiece de nuevo

setTimeout(() => {
  location.reload();
}, 30000);
