const logInPage = document.getElementById("logInPage");
const signUpPage = document.getElementById("signUpPage");

logInPage.addEventListener("click", changePage);
signUpPage.addEventListener("click", changePage);

function changePage() {
  const firstPage = document.getElementById("firstPage");
  const secondPage = document.getElementById("secondPage");
  if (firstPage.classList.contains("slideIn")) {
    firstPage.classList.remove("slideIn");
    firstPage.classList.add("slideOut");
    secondPage.classList.add("slideIn");
    secondPage.classList.remove("slideOut");
  } else {
    firstPage.classList.add("slideIn");
    firstPage.classList.remove("slideOut");
    secondPage.classList.remove("slideIn");
    secondPage.classList.add("slideOut");
  }
}
