const inputUsuario = document.getElementById("inputUsuarioEncrip");
const mostrarMensaje = document.getElementById("mostrarMensajeEncrip");
const copiarBtn = document.getElementById("copiarBtnEncrip");
const mensajeVacio = document.getElementById("mensajeVacioEncrip");
const ocultarMensajeVacio = document.getElementById(
  "ocultarMensajeVacioEncrip"
);
const ocultarBtnCopiar = document.getElementById("ocultarBtnCopiarEncrip");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiarTexto = document.getElementById("copiarBtnEncrip");

encriptar.addEventListener("click", function () {
  mensajeVacio.classList.remove("mostrarMensajeVacioEncrip");
  mensajeVacio.classList.add("ocultarMensajeVacioEncrip");
  copiarBtn.classList.remove("ocultarBtnCopiarEncrip");

  let inputUsuario = document.getElementById("inputUsuarioEncrip").value;
  let encriptar = inputUsuario
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    .replace(/a/g, "ai");
  document.getElementById("mostrarMensajeEncrip").innerHTML = encriptar;
  inputUsuario = document.getElementById("inputUsuarioEncrip").value = "";
});

desencriptar.addEventListener("click", function () {
  mensajeVacio.classList.remove("mostrarMensajeVacioEncrip");
  mensajeVacio.classList.add("ocultarMensajeVacioEncrip");
  copiarBtn.classList.remove("ocultarBtnCopiarEncrip");

  let inputUsuario = document.getElementById("inputUsuarioEncrip").value;
  let desencriptar = inputUsuario
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");
  document.getElementById("mostrarMensajeEncrip").innerHTML = desencriptar;
  inputUsuario = document.getElementById("inputUsuarioEncrip").value = "";
});

copiarTexto.addEventListener("click", function () {
  let textoCopiado = document.getElementById("mostrarMensajeEncrip");
  textoCopiado.select();
  document.execCommand("copy");
  Toastify({
    text: "Texto copiado!",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    //
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
