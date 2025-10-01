const buttons = document.querySelectorAll(".extensions-buttons");
const filters = document.querySelectorAll(".filter-button");
const extensions = document.querySelectorAll(".extensions-elements");
const switches = document.querySelectorAll(".switch input");
const toggleTheme = document.querySelector(".theme-toggle");
const body = document.body;

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
});

let currentFilter = "All";

function applyFilter(filter) {
  extensions.forEach((ext) => {
    const checkbox = ext.querySelector(".switch input");
    const isActive = checkbox && checkbox.checked;

    if (filter === "All") {
      ext.style.display = "block";
    } else if (filter === "Active") {
      ext.style.display = isActive ? "block" : "none";
    } else if (filter === "Inactive") {
      ext.style.display = !isActive ? "block" : "none";
    }
  });
}

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("activo"));

    boton.classList.add("activo");
    const newFilter = boton.textContent.trim();
    applyFilter(newFilter);
    currentFilter = newFilter;
  });
});

extensions.forEach((ext) => {
  const checkbox = ext.querySelector(".switch input");
  if (checkbox) {
    checkbox.addEventListener("change", () => {
      applyFilter(currentFilter);
    });
  }
});
