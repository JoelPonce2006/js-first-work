const buttons = document.querySelectorAll(".extensions-buttons");
const filters = document.querySelectorAll(".filter-button");
const extensions = document.querySelectorAll(".extensions-elements");
const switches = document.querySelectorAll(".switch input");
const toggleTheme = document.querySelector(".theme-toggle");
const body = document.body;

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
});

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("activo"));

    boton.classList.add("activo");
  });
});

let currentFilter = "All";

function normalize(text) {
  return text.trim().toLowerCase();
}

function applyFilter(filter) {
  currentFilter = filter;

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

function setActiveButton(filter) {
  buttons.forEach((b) => b.classList.remove("activo"));
  const targetBtn = Array.from(buttons).find(
    (b) => normalize(b.textContent) === normalize(filter)
  );
  if (targetBtn) {
    targetBtn.classList.add("activo");
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("activo"));
    btn.classList.add("activo");
    applyFilter(btn.textContent.trim());
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

setActiveButton("All");
applyFilter("All");
