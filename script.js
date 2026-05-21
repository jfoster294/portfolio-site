const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeSelect = document.getElementById("themeSelect");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

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

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:fosterjoel34@yahoo.com?subject=${subject}&body=${body}`;

    formMessage.textContent = "Opening your email app...";
    contactForm.reset();
  });
}
