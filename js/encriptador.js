function encriptar() {
  let mensajeVacio = document.getElementById("mensajeVacio");
  let copiarBtn = document.getElementById("copiarBtn");
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
}

function desencriptar() {
  let mensajeVacio = document.getElementById("mensajeVacio");
  let copiarBtn = document.getElementById("copiarBtn");
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
}

function copiarTexto() {
  let textoCopiado = document.getElementById("mostrarMensaje");

  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textoCopiado.value);
}
