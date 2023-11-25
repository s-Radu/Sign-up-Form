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
  if (firstPage.classList.contains("slideIn")) {
    firstPage.className = "slideOut";
    secondPage.className = "slideIn";
  } else {
    firstPage.className = "slideIn";
    secondPage.className = "slideOut";
  }
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

email.addEventListener("keyup", function () {
  let timeoutId;
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkEmail.call(self);
  }, 1000);
});

function checkEmail() {
  const emailError = document.getElementById("emailError");

  if (this.value.length < 4) {
    emailError.textContent = `Email must be at least 4 characters long, you entered ${this.value.length}`;
  } else if (!/\S+@\S+\.\S+/.test(this.value)) {
    emailError.textContent = "Invalid email format";
  } else {
    emailError.textContent = "";
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

//> Password checks

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
    passwordConfirmError.textContent = "";
  }
}
