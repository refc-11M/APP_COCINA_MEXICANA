
function mostrarSeccion(id) {
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach(function(seccion) {
    seccion.classList.remove("activa");
  });
  document.getElementById(id).classList.add("activa");
}
