const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const previewCards = document.querySelectorAll(".project-preview-card");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuButton.textContent = "Menu";
  });
});

window.addEventListener("scroll", updateActiveNavLink);

function updateActiveNavLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

previewCards.forEach((card) => {
  const image = card.querySelector("img");

  if (!image) {
    card.classList.add("is-missing");
    return;
  }

  image.addEventListener("error", () => {
    card.classList.add("is-missing");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const subjectInput = document.getElementById("subjectInput");
  const messageInput = document.getElementById("messageInput");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = "Please fill out every field before sending.";
    return;
  }

  formMessage.textContent = "Message ready. Connect this form to a backend or email service to send it.";

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});
