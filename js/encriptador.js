const inputUsuario = document.getElementById("inputUsuario");
const mostrarMensaje = document.getElementById("mostrarMensaje");
const copiarBtn = document.getElementById("copiarBtn");
const mensajeVacio = document.getElementById("mensajeVacio");
const ocultarMensajeVacio = document.getElementById("ocultarMensajeVacio");
const ocultarBtnCopiar = document.getElementById("ocultarBtnCopiar");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiarTexto = document.getElementById("copiarBtn");
const pegarTexto = document.getElementById("pegarBtn");

encriptar.addEventListener("click", function () {
  mensajeVacio.classList.remove("mostrarMensajeVacio");
  mensajeVacio.classList.add("ocultarMensajeVacio");
  copiarBtn.classList.remove("ocultarBtnCopiar");

  let inputUsuario = document.getElementById("inputUsuario").value;
  let encriptar = inputUsuario
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    .replace(/a/g, "ai");
  document.getElementById("mostrarMensaje").innerHTML = encriptar;
  inputUsuario = document.getElementById("inputUsuario").value = "";
});

desencriptar.addEventListener("click", function () {
  mensajeVacio.classList.remove("mostrarMensajeVacio");
  mensajeVacio.classList.add("ocultarMensajeVacio");
  copiarBtn.classList.remove("ocultarBtnCopiar");

  let inputUsuario = document.getElementById("inputUsuario").value;
  let desencriptar = inputUsuario
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");
  document.getElementById("mostrarMensaje").innerHTML = desencriptar;
  inputUsuario = document.getElementById("inputUsuario").value = "";
});

copiarTexto.addEventListener("click", function () {
  let textoCopiado = document.getElementById("mostrarMensaje");
  textoCopiado.select();
  document.execCommand("copy");
});
