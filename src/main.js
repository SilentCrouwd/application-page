// Dark-Mode-Toggle: Startwert setzt das Inline-Skript in index.html
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute("aria-pressed", String(theme === "dark"));
}

function storedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

applyTheme(root.dataset.theme);

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Speichern nicht möglich (z. B. privater Modus) – Theme gilt nur für diese Sitzung
  }
});

// Ohne gespeicherte Wahl der Systemeinstellung folgen
systemDark.addEventListener("change", (e) => {
  if (!storedTheme()) applyTheme(e.matches ? "dark" : "light");
});
