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

let timeoutId;

firstName.addEventListener("keyup", function () {
  clearTimeout(timeoutId);
  const self = this;

  timeoutId = setTimeout(() => {
    checkName.call(self);
  }, 1000);
});

lastName.addEventListener("keyup", function () {
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
