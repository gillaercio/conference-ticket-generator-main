function sendButton(event) {
  event.preventDefault();

  const avatar = document.getElementById('upload-area');
  const fileInfo = document.querySelector('.file-info');
  const name = document.getElementById('full-name');
  const email = document.getElementById('form-email');
  const errorMessage = document.getElementById('error-message');
  const github = document.getElementById('form-github');
  const button = document.getElementById('button');

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
    name.style.borderColor = "var(--Neutral-700)";
    email.style.borderColor = "var(--Neutral-700)";
    github.style.borderColor = "var(--Neutral-700)";
    errorMessage.style.display = "none";
    name.value = "";
    email.value = "";
    github.value = "";
  }
}

document.getElementById("form-email").addEventListener("input", function() {
  const name = this;
  const email = this;
  const github = this;
  const errorMessage = document.getElementById("error-message");

  name.style.borderColor = "var(--Neutral-700)";
  email.style.borderColor = "var(--Neutral-700)";
  github.style.borderColor = "var(--Neutral-700)";
  errorMessage.style.display = "none";
})