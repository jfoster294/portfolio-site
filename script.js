const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeSelect = document.getElementById("themeSelect");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

const portfolioThemeClasses = [
  "theme-dark",
  "theme-blue",
  "theme-purple",
  "theme-green",
  "theme-light"
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
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:fosterjoel34@yahoo.com?subject=${emailSubject}&body=${emailBody}`;

    formMessage.textContent = "Opening your email app...";
    contactForm.reset();
  });
}
