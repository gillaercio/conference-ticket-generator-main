const formSection = document.getElementById('form-section');
const ticketSection = document.getElementById('ticket-section');
const ticketName = document.getElementById('ticket-name');
const ticketEmail = document.getElementById('ticket-email');
const ticketAvatar = document.getElementById('ticket-avatar');
const ticketNameId = document.getElementById('ticket-name-id');
const ticketGithub = document.getElementById('ticket-github');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');

let uploadedAvatarDataURL = "";

function showFileError(message) {
  const fileInfoText = document.querySelector("#file-info span");
  const fileInfoImage = document.querySelector("#file-info img");

  fileInfoText.textContent = message;
  fileInfoText.style.color = "var(--Orange-700)";
  fileInfoImage.src = "assets/images/icon-info-error.svg";
}

function sendButton(event) {
  event.preventDefault();

  const name = document.getElementById('full-name');
  const email = document.getElementById('form-email');
  const errorMessage = document.getElementById('error-message');
  const github = document.getElementById('form-github');

  let hasError = email.value.trim() === "";

  if (!name.value.trim() || !github.value.trim()) {
    alert("Please fill in all fields.");
    return;
  }

  if (email.value.trim() !== "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    hasError = !emailPattern.test(email.value.trim());
  }

  if (hasError) {
    email.style.borderColor = "var(--Orange-700)";
    errorMessage.style.display = "flex";
    email.value = "";
    email.placeholder = "email@example.com";
    return;
  }

  if (!uploadedAvatarDataURL) {
    showFileError("Please upload a photo (JPG or PNG, max size: 500KB).");
    return;
  }

  title.style.display = "none";
  subtitle.style.display = "none";

  ticketName.textContent = name.value;
  ticketEmail.textContent = email.value;
  ticketAvatar.src = uploadedAvatarDataURL;
  ticketAvatar.alt = `${name.value}'s Avatar`;
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

const uploadLabelText = document.getElementById('upload-avatar-label');
const uploadInput = document.getElementById('avatar-upload');
const uploadArea = document.getElementById('upload-area');
const avatarPreview = document.getElementById('avatar-preview');
const uploadText = document.querySelector('.upload-text');
const uploadActions = document.querySelector('.upload-actions');
const removeButton = document.getElementById('remove-avatar-button');
const changeButton = document.getElementById('change-avatar-button');
const uploadIconWrapper = document.querySelector('.upload-icon');

uploadInput.addEventListener('click', () => {
  uploadInput.value = null;
});

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

document.getElementById("form-email").addEventListener("input", function() {
  const email = this;
  const errorMessage = document.getElementById("error-message");

  email.style.borderColor = "var(--Neutral-700)";
  errorMessage.style.display = "none";
})

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileInfoText = document.querySelector("#file-info span");
  const fileInfoImage = document.querySelector("#file-info img");

  const validTypes = ['image/jpeg', 'image/png'];
  if (!file || !validTypes.includes(file.type)) {
    showFileError("Invalid file type. Only JPG and PNG are allowed.");
    uploadInput.value = "";
    return;
  }

  if (file.size > 500 * 1024) {
    showFileError("File too large. Please upload a photo under 500kb.");
    uploadInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    uploadedAvatarDataURL = e.target.result;
    avatarPreview.src = e.target.result;

    uploadText.style.display = "none";
    uploadActions.style.display = "flex";
    uploadIconWrapper.classList.add("user-uploaded");
    uploadIconWrapper.style.padding = "0";
  };
  reader.readAsDataURL(file);

  fileInfoText.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
  fileInfoText.style.color = "";
  fileInfoImage.src = "assets/images/icon-info.svg";
});

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
    uploadArea.classList.add('focused', 'dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('focused', 'dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('focused', 'dragover');

  const droppedFile = e.dataTransfer.files[0];
  const fileInfoText = document.querySelector("#file-info span");
  const fileInfoImage = document.querySelector("#file-info img");

  const validTypes = ['image/jpeg', 'image/png'];
  if (!droppedFile || !validTypes.includes(droppedFile.type)) {
    showFileError("Invalid file type. Only JPG and PNG are allowed.");
    return;
  }

  if (droppedFile.size > 500 * 1024) {
    showFileError("File too large. Please upload a photo under 500kb.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    uploadedAvatarDataURL = e.target.result;
    avatarPreview.src = e.target.result;

    uploadText.style.display = "none";
    uploadActions.style.display = "flex";
    uploadIconWrapper.classList.add("user-uploaded");
    uploadIconWrapper.style.padding = "0";
  };
  reader.readAsDataURL(droppedFile);

  fileInfoText.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
  fileInfoText.style.color = "";
  fileInfoImage.src = "assets/images/icon-info.svg";
})

removeButton.addEventListener('click', () => {
  uploadInput.value = "";
  uploadedAvatarDataURL = "";
  avatarPreview.src = "assets/images/icon-upload.svg";
  uploadText.style.display = "block";
  uploadActions.style.display = "none";
  uploadIconWrapper.classList.remove("user-uploaded");
  uploadIconWrapper.style.padding = "0.6rem";
});

changeButton.addEventListener('click', () => {
  uploadInput.value = "";
  uploadInput.click();
});

const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () => {
  ticketSection.style.display = "none";
  formSection.style.display = "block";

  ticketName.textContent = "";
  ticketEmail.textContent = "";
  ticketNameId.textContent = "";
  ticketGithub.textContent = "";
  ticketAvatar.src = "";

  title.style.display = "block";
  subtitle.style.display = "block";
  uploadedAvatarDataURL = "";
  avatarPreview.src = "assets/images/icon-upload.svg";
  uploadText.style.display = "block";
  uploadActions.style.display = "none";
  uploadIconWrapper.classList.remove("user-uploaded");
  uploadIconWrapper.style.padding = "0.6rem";

  const fileInfoText = document.querySelector("#file-info span");
  const fileInfoImage = document.querySelector("#file-info img");
  fileInfoText.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
  fileInfoText.style.color = "";
  fileInfoImage.src = "assets/images/icon-info.svg";

  document.getElementById('full-name').focus();
});