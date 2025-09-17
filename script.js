const buttons = document.querySelectorAll(".extensions-buttons");

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("activo"));

    boton.classList.add("activo");
  });
});
