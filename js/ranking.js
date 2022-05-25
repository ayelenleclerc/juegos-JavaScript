let puntajeTotal =
  JSON.parse(localStorage.getItem("puntajeTotal")) ??
  localStorage.setItem("puntajeTotal", JSON.stringify(juegos));

// creo las cards de juegos

const rankingCard = document.getElementById("app");

rankingCard.innerHTML = "";
juegos.forEach((juego, indice) => {
  rankingCard.innerHTML += `
     <div class="card card-puntaje" id="juego${indice}">
        <h2 class="card-title__puntaje">${juego.nombre}</h2> 
        <img src="${juego.img} " class="card-img-top img-puntaje" alt="gif ${
    juego.nombre
  } ">
        <div class="card-body">
           <h4 class="card-text h4-puntaje">${juego.descripcion} </h4>
           <p class="card-text p-puntaje" id="puntaje${indice}">Puntaje: ${parseInt(
    puntajeTotal[indice].puntaje
  )}</p>
            <button type="button" class="btn btn-dark btn-puntaje" id="boton${indice}"> Puntuar </button>
        </div>
    </div> `;
});

// capturo el puntaje del juego

juegos.forEach((juego, indice) => {
  let botonPuntaje = document.getElementById(`boton${indice}`);
  botonPuntaje.addEventListener("click", () => {
    let puntaje = juego.puntaje + 1;
    juego.puntaje = parseInt(puntaje);
    localStorage.setItem("puntajeTotal", JSON.stringify(juegos));
    let puntajeTotal = JSON.parse(localStorage.getItem("puntajeTotal"));
    let puntajehtml = document.getElementById(`puntaje${indice}`);
    puntajehtml.innerHTML = `Puntaje: ${parseInt(
      puntajeTotal[indice].puntaje
    )}`;
  });
});
