const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
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
