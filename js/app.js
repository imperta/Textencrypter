let buttonEncrypt = document.querySelector(".btn-enc");
let buttonDecrypt = document.querySelector(".btn-desenc");
let munieco = document.querySelector(".doll");
let resultsStatus = document.querySelector(".results-container");
let textResult = document.querySelector(".results");
let textBox = document.querySelector(".text-box");

buttonEncrypt.onclick = encriptar;
buttonDecrypt.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  let textBox = recuperarTexto();
  textResult.textContent = encriptarTexto(textBox);
  textResult.classList.remove("ocultar");
}

function desencriptar() {
  ocultarAdelante();
  let textBox = recuperarTexto();
  textResult.textContent = desencriptarTexto(textBox);
  textResult.classList.remove("ocultar");
}

function recuperarTexto() {
  return textBox.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  resultsStatus.classList.add("ocultar");

  if (textBox.value == "") {
    munieco.classList.remove("ocultar");
    resultsStatus.classList.remove("ocultar");
  }
  //    dssdsadadasdasdasdasdasd
}

textBox.addEventListener("input", function () {
  if (textBox.value === "") {
    munieco.classList.remove("ocultar");
    resultsStatus.classList.remove("ocultar");
    textResult.classList.add("ocultar");
  } else {
    munieco.classList.remove("ocultar");
    resultsStatus.classList.remove("ocultar");
  }
});

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 3;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

const copyText = document.querySelector(".btn-copy");
copyText.addEventListener(
  "click",
  (copy = () => {
    let content = document.querySelector(".results").textContent;
    navigator.clipboard.writeText(content);
    console.log("hola");
  })
);
