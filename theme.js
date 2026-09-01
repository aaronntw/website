const root = document.documentElement;
const button = document.querySelector(".theme-toggle");
const label = button.querySelector(".theme-label");
const icon = button.querySelector("[aria-hidden]");

function renderTheme(theme) {
  const next = theme === "dark" ? "light" : "dark";
  root.dataset.theme = theme;
  label.textContent = next[0].toUpperCase() + next.slice(1);
  icon.textContent = theme === "dark" ? "☼" : "◐";
  button.setAttribute("aria-label", `Switch to ${next} mode`);
  button.title = `Switch to ${next} mode`;
}

renderTheme(root.dataset.theme);
button.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  renderTheme(next);
});
