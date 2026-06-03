function copiar(id, boton) {
  const elemento = document.getElementById(id);
  if (!elemento) {
    console.error("No se encontró el elemento con id:", id);
    return;
  }
  
  const texto = elemento.innerText;
  const contenidoOriginal = boton.innerHTML;

  navigator.clipboard.writeText(texto)
    .then(() => {
      boton.innerHTML = "Copiado ✓";
      boton.style.backgroundColor = "rgba(0, 200, 0, 0.45)";
      boton.style.fontWeight = "bold";

      setTimeout(() => {
        boton.innerHTML = contenidoOriginal;
        boton.style.fontWeight = "normal";
        boton.style.backgroundColor = "rgba(255,255,255,0.15)";
      }, 3000);
    })
    .catch(err => {
      console.error("Error al copiar:", err);
    });
}
