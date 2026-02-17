function copiar(id, boton) {
  const texto = document.getElementById(id).innerText;

  navigator.clipboard.writeText(texto)
    .then(() => {
      const textoOriginal = boton.innerText;
      boton.innerText = "Copiado ✓";
      boton.style.backgroundColor = "rgba(0,200,0,0.6)";

      setTimeout(() => {
        boton.innerText = textoOriginal;
        boton.style.backgroundColor = "rgba(255,255,255,0.15)";
      }, 3000);
    })
    .catch(err => {
      console.error("Error al copiar:", err);
    });
}
