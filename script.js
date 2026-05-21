const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeSelect = document.getElementById("themeSelect");

const portfolioThemeClasses = [
  "theme-dark",
  "theme-light",
  "theme-blue",
  "theme-purple",
  "theme-green"
];

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

function applyPortfolioTheme(theme) {
  document.body.classList.remove(...portfolioThemeClasses);
  document.body.classList.add(theme);

  localStorage.setItem("selectedPortfolioTheme", theme);
}

if (themeSelect) {
  const savedTheme = localStorage.getItem("selectedPortfolioTheme") || "theme-dark";

  themeSelect.value = savedTheme;
  applyPortfolioTheme(savedTheme);

  themeSelect.addEventListener("change", function () {
    applyPortfolioTheme(themeSelect.value);
  });
}
