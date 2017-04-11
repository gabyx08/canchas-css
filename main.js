var botonSoccer = document.getElementById("botonSoccer");
botonSoccer.addEventListener("click", mostrarCanchaSoccer);

var botonBasquet = document.getElementById("botonBasquet");
botonBasquet.addEventListener("click", mostrarCanchaBasquet);

var botonTenis= document.getElementById("botonTenis");
botonTenis.addEventListener("click", mostrarCanchaTenis);

var canchaFutbol = document.getElementById("canchaFutbol");
var canchaBasquet = document.getElementById("canchaBasquet");
var canchaTenis = document.getElementById("canchaTenis");

function ocultarCanchas(){
  canchaFutbol.style.display="none";
  canchaTenis.style.display="none";
  canchaBasquet.style.display="none";
}

function mostrarCanchaSoccer(){
  ocultarCanchas();
  canchaFutbol.style.display="block";
}
function mostrarCanchaBasquet(){
  ocultarCanchas();
  canchaBasquet.style.display="block";
}
function mostrarCanchaTenis(){
  ocultarCanchas();
  canchaTenis.style.display="block";
}

ocultarCanchas();
