function capturarStorage() {
  return JSON.parse(localStorage.getItem("puntajeTotal")) ?? [];
}

//guardar Storage
function guardarStorage(juegos) {
  localStorage.setItem("puntajeTotal", JSON.stringify(juegos));
}

// creo las cards de juegos

const rankingCard = document.getElementById("app");

function mostarjuegos(juegos) {
  rankingCard.innerHTML = "";
  juegos.forEach((juego, indice) => {
    rankingCard.innerHTML += `
     <div class="card card-puntaje" id="juego${indice}>
        <h2 class="card-title__puntaje">${juego.nombre}</h2> 
        <img src="${juego.img} " class="card-img-top img-puntaje" alt="gif ${juego.nombre} ">
        <div class="card-body">
           <p class="card-text p-puntaje">${juego.descripcion} </p>
           <p class="card-text p-puntaje" id="puntaje${indice}">Puntos: ${juego.puntaje}</p>
            <button type="button" class="btn btn-dark btn-puntaje" id="boton${indice}"> Puntuar </button>
        </div>
    </div> `;
  });
}

// capturo el puntaje del juego
function capturarPuntaje() {
  juegos.forEach((juego, indice) => {
    let botonPuntaje = document.getElementById(`boton${indice}`);
    botonPuntaje.addEventListener("click", () => {
      let puntaje = juego.puntaje + 1;
      juego.puntaje = parseInt(puntaje);
      puntaje = document.getElementById(`puntaje${indice}`);
      puntaje.innerHTML = `Puntos: ${juego.puntaje}`;
      guardarStorage(juegos);
    });
  });
}

mostarjuegos(juegos);
capturarPuntaje();
capturarStorage();
guardarStorage(juegos);
