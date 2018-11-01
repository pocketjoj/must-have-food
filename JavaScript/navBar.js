//Navigation Menu Function with Hamburger Buttons

const hamburger = document.getElementById("hamburger");
const navBar = document.getElementsByClassName("nav-menu");
const navLinks = navBar[0].getElementsByTagName('a');

hamburger.addEventListener('click', function(){
  for (i = 0; i < navLinks.length; i++) {
    if (navLinks[i].style.visibility == "collapse") {
        navLinks[i].style.visibility = "visible";
      } else {
        navLinks[i].style.visibility = "collapse";
    }
  }
});
