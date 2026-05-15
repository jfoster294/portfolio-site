const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const themeToggle = document.getElementById("themeToggle");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill out all fields.";
    return;
  }

  formStatus.textContent =
    "Message ready to send. Contact form front-end validation works.";

  contactForm.reset();
});

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
