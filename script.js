const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const themeGearButton = document.getElementById("themeGearButton");
const themePanel = document.getElementById("themePanel");
const themeDots = document.querySelectorAll(".theme-dot");
const resetThemeButton = document.getElementById("resetThemeButton");
const glassToggle = document.getElementById("glassToggle");
const animationToggle = document.getElementById("animationToggle");
const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

const themeClasses = [
  "theme-green",
  "theme-blue",
  "theme-purple",
  "theme-orange",
  "theme-pink"
];

if (menuButton) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

function applyTheme(theme) {
  document.body.classList.remove(...themeClasses);
  document.body.classList.add(theme);

  localStorage.setItem("portfolioTheme", theme);

  themeDots.forEach(function (dot) {
    dot.classList.remove("active");

    if (dot.dataset.theme === theme) {
      dot.classList.add("active");
    }
  });
}

const savedTheme = localStorage.getItem("portfolioTheme") || "theme-green";
applyTheme(savedTheme);

themeDots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    applyTheme(dot.dataset.theme);
  });
});

if (themeGearButton) {
  themeGearButton.addEventListener("click", function () {
    themePanel.classList.toggle("hidden-panel");
  });
}

if (glassToggle) {
  const glassOff = localStorage.getItem("portfolioGlassOff") === "true";

  if (glassOff) {
    document.body.classList.add("no-glass");
    glassToggle.classList.remove("active");
  }

  glassToggle.addEventListener("click", function () {
    document.body.classList.toggle("no-glass");
    glassToggle.classList.toggle("active");

    localStorage.setItem(
      "portfolioGlassOff",
      document.body.classList.contains("no-glass")
    );
  });
}

if (animationToggle) {
  const animationsOff = localStorage.getItem("portfolioAnimationsOff") === "true";

  if (animationsOff) {
    document.body.classList.add("no-animations");
    animationToggle.classList.remove("active");
  }

  animationToggle.addEventListener("click", function () {
    document.body.classList.toggle("no-animations");
    animationToggle.classList.toggle("active");

    localStorage.setItem(
      "portfolioAnimationsOff",
      document.body.classList.contains("no-animations")
    );
  });
}

if (resetThemeButton) {
  resetThemeButton.addEventListener("click", function () {
    applyTheme("theme-green");

    document.body.classList.remove("no-glass");
    document.body.classList.remove("no-animations");

    glassToggle.classList.add("active");
    animationToggle.classList.add("active");

    localStorage.removeItem("portfolioGlassOff");
    localStorage.removeItem("portfolioAnimationsOff");
  });
}

if (lightModeButton && darkModeButton) {
  lightModeButton.addEventListener("click", function () {
    lightModeButton.classList.add("active");
    darkModeButton.classList.remove("active");
  });

  darkModeButton.addEventListener("click", function () {
    darkModeButton.classList.add("active");
    lightModeButton.classList.remove("active");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !subject || !message) {
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
