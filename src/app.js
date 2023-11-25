//* Off canvas scroll to the top when clicked

const offCanvas = document.getElementById("offCanvasButton");

offCanvas.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo(0, 0);
}
//* Off canvas scroll to bottom when clicked

const offCanvasBottom = document.getElementById("scrollToBottom");

offCanvasBottom.addEventListener("click", scrollToBottom);

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

//* Page change

const logInPage = document.getElementById("logInPage");
const signUpPage = document.getElementById("signUpPage");

logInPage.addEventListener("click", changePage);
signUpPage.addEventListener("click", changePage);

function changePage() {
  const firstPage = document.getElementById("firstPage");
  const secondPage = document.getElementById("secondPage");
  const allInputs = document.querySelectorAll("input");
  if (firstPage.classList.contains("slideIn")) {
    firstPage.className = "slideOut";
    secondPage.className = "slideIn";
  } else {
    firstPage.className = "slideIn";
    secondPage.className = "slideOut";
  }
  allInputs.forEach((input) => {
    input.value = "";
  });
}

//* Form checks

//> First and last name checks

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");

firstName.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkName.call(self);
  }, 1000);
});

lastName.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkName.call(self);
  }, 1000);
});

function checkName() {
  const fName = document.getElementById("fnameError");
  const lName = document.getElementById("lnameError");

  if (this.value.length < 4) {
    if (this.id === "fname") {
      fName.textContent = `First name must be at least 4 characters long, you entered ${this.value.length}`;
    } else if (this.id === "lname") {
      lName.textContent = `Last name must be at least 4 characters long, you entered ${this.value.length}`;
    }
  } else {
    if (this.id === "fname") {
      fName.textContent = "";
    } else if (this.id === "lname") {
      lName.textContent = "";
    }
  }
}

//> Email check
const email = document.getElementById("email");
const logInEmail = document.getElementById("logInEmail");
const emailError = document.getElementById("emailError");

email.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkEmail.call(self);
  }, 1000);
});

logInEmail.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkEmail.call(self);
  }, 1000);
});

function checkEmail() {
  const emailError = document.getElementById("emailError");
  const logInEmailError = document.getElementById("logInEmailError");

  if (email.value.length > 1) {
    if (this.value.length < 4) {
      emailError.textContent = `Email must be at least 4 characters long, you entered ${this.value.length}`;
    } else if (!/\S+@\S+\.\S+/.test(this.value)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = "";
    }
  } else {
    emailError.textContent = "";
  }

  if (logInEmail.value.length > 1) {
    if (this.value.length < 4) {
      logInEmailError.textContent = `Email must be at least 4 characters long, you entered ${this.value.length}`;
    } else if (!/\S+@\S+\.\S+/.test(this.value)) {
      logInEmailError.textContent = "Invalid email format";
    } else {
      logInEmailError.textContent = "Wagwan bruv, I know you :) ";
      logInEmailError.classList.remove("text-red-500");
      logInEmailError.classList.add("text-purple-500");
      logInEmailError.classList.remove("text-sm");
      logInEmailError.classList.add("text-md");
    }
  } else {
    logInEmailError.textContent = "";
  }
}

//> Phone number check

const phoneNumber = document.getElementById("phoneNumber");

phoneNumber.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkPhoneNumber.call(self);
  }, 1000);
});

function checkPhoneNumber() {
  const phoneNumberError = document.getElementById("phoneError");

  if (this.value.length < 10) {
    phoneNumberError.textContent = `Phone number must be at least 10 characters long, you entered ${this.value.length}`;
  } else if (!/^\d+$/.test(this.value)) {
    phoneNumberError.textContent = "Phone number can only contain numbers";
  } else if (
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      this.value
    )
  ) {
    phoneNumberError.textContent = "Invalid phone number format";
  } else {
    phoneNumberError.textContent = "";
  }
}

//> Password check

const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.getElementById("passwordConfirmError");

passwordConfirm.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkPassword.call(self);
  }, 1000);
});

function checkPassword() {
  if (password.value !== passwordConfirm.value) {
    passwordConfirmError.textContent = "Passwords do not match";
  } else {
    passwordConfirmError.textContent = "Matches :) ";
  }
}

//> Password strength check

const passwordStrenghtCheck = document.getElementById("passwordStrenghtCheck");

password.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkPasswordStrenght.call(self);
  }, 1000);
});
password.addEventListener("blur", () => {
  passwordStrenghtCheck.classList.add("hidden");
});

function checkPasswordStrenght() {
  const pwdCapital = document.getElementById("pwdCapital");
  const pwdLength = document.getElementById("pwdLength");
  const pwdNumber = document.getElementById("pwdNumber");
  const pwdSpecial = document.getElementById("pwdSpecial");

  passwordStrenghtCheck.classList.remove("hidden");

  if (password.value.length > 8) {
    pwdLength.classList.add("text-green-500");
    pwdLength.classList.remove("text-red-500");
  } else {
    restorePasswordChecks();
  }
  if (/[A-Z]/.test(password.value)) {
    pwdCapital.classList.remove("text-red-500");
    pwdCapital.classList.add("text-green-500");
  }
  if (/[0-9]/.test(password.value)) {
    pwdNumber.classList.remove("text-red-500");
    pwdNumber.classList.add("text-green-500");
  }
  if (/[!@#$%^&*]/.test(password.value)) {
    pwdSpecial.classList.remove("text-red-500");
    pwdSpecial.classList.add("text-green-500");
  }
}

function restorePasswordChecks() {
  const pwdCapital = document.getElementById("pwdCapital");
  const pwdLength = document.getElementById("pwdLength");
  const pwdNumber = document.getElementById("pwdNumber");
  const pwdSpecial = document.getElementById("pwdSpecial");

  pwdCapital.classList.remove("text-green-500");
  pwdCapital.classList.add("text-red-500");
  pwdLength.classList.remove("text-green-500");
  pwdLength.classList.add("text-red-500");
  pwdNumber.classList.remove("text-green-500");
  pwdNumber.classList.add("text-red-500");
  pwdSpecial.classList.remove("text-green-500");
  pwdSpecial.classList.add("text-red-500");
}
