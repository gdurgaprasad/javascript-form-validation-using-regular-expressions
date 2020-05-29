loadEventListeners();

function loadEventListeners() {
  document.getElementById("name").addEventListener("keyup", validateName);
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document.getElementById("phone").addEventListener("keyup", validatePhone);
  document.getElementById("zipcode").addEventListener("keyup", validateZipcode);
}

function validateName() {
  const name = document.getElementById("name");
  const regExp = /^([a-zA-Z? ]){2,10}$/i;

  if (regExp.test(name.value)) {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
  } else {
    name.classList.remove("is-valid");
    name.classList.add("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]){2,5}$/;

  if (regExp.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const regExp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (regExp.test(phone.value)) {
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
  } else {
    phone.classList.remove("is-valid");
    phone.classList.add("is-invalid");
  }
}

function validateZipcode() {
  const zipcode = document.getElementById("zipcode");
  const regExp = /^\d{5}(-\d{4})?$/;

  if (regExp.test(zipcode.value)) {
    zipcode.classList.remove("is-invalid");
    zipcode.classList.add("is-valid");
  } else {
    zipcode.classList.remove("is-valid");
    zipcode.classList.add("is-invalid");
  }
}
