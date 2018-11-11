//Constants for Modals and their buttons
const submitInfo = document.getElementsByClassName("submit-info");
const recipeSubmit = document.getElementById("recipe-submit");
const contactMe = document.getElementById("contact-submit")
const popup = document.getElementsByClassName("popup");
const popupForm = document.getElementsByClassName("popup-form");

//Constants for hiding scroll bar when modals pop up
const body = document.getElementsByTagName("body");
const html = document.getElementsByTagName("html")
const content = document.getElementsByClassName("content")

//Constants for Under Construction sign to pop up when Newsletter Button is clicked
const newsletterButton = document.getElementsByClassName("newsletter");
const construction = document.getElementById("construction-pop");


//Listeners for "Submit a Recipe" and "Contact Me" Buttons
submitInfo[0].addEventListener('click', function(){
  if (popup[1].style.visibility != "visible") {
  popup[0].style.visibility = "visible";
  body[0].style.overflow = "hidden";
  html[0].style.overflow = "hidden";
  content[0].style.overflow = "hidden";
}});

submitInfo[1].addEventListener('click', function(){
  if (popup[0].style.visibility != "visible") {
  popup[1].style.visibility = "visible";
  body[0].style.overflow = "hidden";
  html[0].style.overflow = "hidden";
  content[0].style.overflow = "hidden";
}});

//Handles each form when its "Submit" button is clicked.
recipeSubmit.addEventListener('click', function(){
  popup[0].style.visibility = "collapse";
  body[0].style.overflow = "auto";
  html[0].style.overflow = "auto";
  content[0].style.overflow = "auto";
});

recipeSubmit.addEventListener('click', function(){
  popup[1].style.visibility = "collapse";
  body[0].style.overflow = "auto";
  html[0].style.overflow = "auto";
  content[0].style.overflow = "auto";
});

//Under Construction sign for Newsletter Buttons
construction.style.display = "none";

newsletterButton[0].addEventListener('click', function(){
  if (construction.style.display == "none"){
      construction.style.display = "block"
    } else {
      construction.style.display = "none"
    }
});

//Clear Popup Forms/Under Construction sign with Escape
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      popup[0].style.visibility = "collapse";
      popup[1].style.visibility = "collapse";
      construction.style.display = "none";
      body[0].style.overflow = "auto";
      html[0].style.overflow = "auto";
      content[0].style.overflow = "auto";
    }
};

// Clear Under Construction Sign with click anywhere
document.addEventListener('click', function(event){
  if (event.target != newsletterButton[0]){
    construction.style.display = "none"
  }
});
