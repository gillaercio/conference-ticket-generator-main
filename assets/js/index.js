function sendButton(event) {
  event.preventDefault();

  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.subtitle');

  const name = document.getElementById('full-name');
  const email = document.getElementById('form-email');
  const errorMessage = document.getElementById('error-message');
  const github = document.getElementById('form-github');

  const ticketName = document.getElementById('ticket-name');
  const ticketEmail = document.getElementById('ticket-email');
  const ticketNameId = document.getElementById('ticket-name-id');
  const ticketGithub = document.getElementById('ticket-github');

  const formSection = document.getElementById('form-section');
  const ticketSection = document.getElementById('ticket-section');

  let hasError = email.value.trim() === "";

  if (email.value.trim() !== "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    hasError = !emailPattern.test(email.value.trim());
  }

  if (hasError) {
    email.style.borderColor = "var(--Orange-700)";
    errorMessage.style.display = "flex";
    email.value = "";
    email.placeholder = "email@example.com";
  } else {
    title.style.display = "none";
    subtitle.style.display = "none";

    ticketName.textContent = name.value;
    ticketEmail.textContent = email.value;
    ticketNameId.textContent = name.value;
    ticketGithub.textContent = `@${github.value.replace(/^@/, "")}`;

    formSection.style.display = "none";
    ticketSection.style.display = "flex";

    name.style.borderColor = "var(--Neutral-700)";
    email.style.borderColor = "var(--Neutral-700)";
    github.style.borderColor = "var(--Neutral-700)";
    errorMessage.style.display = "none";

    name.value = "";
    email.value = "";
    github.value = "";
  }
}

const uploadLabelText = document.getElementById('upload-avatar-label');
const uploadInput = document.getElementById('avatar-upload');
const uploadArea = document.getElementById('upload-area');

uploadLabelText.addEventListener('click', () => {
  uploadArea.focus();
  uploadArea.classList.add("focused");
});

uploadArea.addEventListener("blur", () => {
  uploadArea.classList.remove("focused");
});

uploadArea.addEventListener("focus", () => {
  uploadArea.classList.add("focused");
});

uploadArea.addEventListener("blur", () => {
  uploadArea.classList.remove("focused");
});

document.getElementById("form-email").addEventListener("input", function() {
  const email = this;
  const errorMessage = document.getElementById("error-message");

  email.style.borderColor = "var(--Neutral-700)";
  errorMessage.style.display = "none";
})