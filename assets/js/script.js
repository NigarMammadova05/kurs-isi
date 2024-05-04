'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
function openSignInWindow() {
  // Yeni pencereyi aç
  var signInWindow = window.open('sign-in.html', 'Sign In', 'width=400,height=400');
  
  // Eğer tarayıcı pop-up blokeri aktifse kullanıcıya uyarı ver
  if (signInWindow === null) {
    alert("Sign-in window was blocked. Please allow pop-ups for this site.");
  }
}
function openSignInWindow() {
  var signInWindow = window.open("sign-in.html", "_blank", "width=" + window.innerWidth + ",height=" + window.innerHeight);
  signInWindow.focus();
}
