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
