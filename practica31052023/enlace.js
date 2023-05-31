

var numeroCorrecto;
var intentosRestantes;


function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}
function Juego() {
  numeroCorrecto = generarNumeroAleatorio();
  intentosRestantes = 8;
  document.getElementById("numeroCorrecto").value = numeroCorrecto;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("intentos").innerHTML = "Intentos restantes  " + intentosRestantes;
}
function adivinar() {
  var numeroAdivinado = document.getElementById("numeroAdivinado").value;

  if (numeroAdivinado == numeroCorrecto) {
    document.getElementById("resultado").innerHTML = "¡Muy bien! Has adivinado el número.";
    desactivarJuego();
  } else if (numeroAdivinado < numeroCorrecto) {
    document.getElementById("resultado").innerHTML = "El número a adivinar es mayor.";
  } else {
    document.getElementById("resultado").innerHTML = "El número a adivinar es menor.";
  }

  intentosRestantes--;
  document.getElementById("intentos").innerHTML = "Te ha quedado " + intentosRestantes+" intentos";

  if (intentosRestantes === 0) {
    document.getElementById("resultado").innerHTML = "¡se han agotado tus intentos! El número correcto era " + numeroCorrecto + ".";
    desactivarJuego();
  }
}
function desactivarJuego() {
  document.getElementById("numeroAdivinado").disabled = true;
  document.getElementById("Btnadivinar").disabled = true;
}