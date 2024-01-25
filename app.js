let listDeNumerosSorteados = [];
let numeroMaximo = 10;
let intentos = 1;

let generarNumeroSecreto = () => {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listDeNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles.");
  } else {
    if (listDeNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listDeNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
};
let numeroSecreto = generarNumeroSecreto();

let asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
};

let verificarIntento = () => {
  let numberoDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );
  if (numberoDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numberoDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
};

let limpiarCaja = () => (document.getElementById("valorUsuario").value = "");

let mensajesIniciales = () => {
  asignarTextoElemento("h1", "Jugeo del numero secreto");
  asignarTextoElemento("p", `Indicia un numero del 1 al ${numeroMaximo}`);
};
let reiniciarJuego = () => {
  limpiarCaja();
  mensajesIniciales();
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById("reiniciar").setAttribute("disabled", "true");
};

mensajesIniciales();
