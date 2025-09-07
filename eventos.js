const boton = document.querySelector("button");
boton.addEventListener("click", (event) => {
  event.stopPropagation(); 
  alert("Hola! Soy el botón");
});
