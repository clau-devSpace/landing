const ul = document.querySelector("#nav-ul");
const abrir = document.querySelector("#navbar");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
  ul.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
  ul.classList.remove("visible");
})




