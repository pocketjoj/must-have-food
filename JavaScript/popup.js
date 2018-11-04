//Controls pop-up menu when "Submit a Recipe" or "Cotact Me" Buttons are clicked.

const submitInfo = document.getElementsByClassName("submit-info");
const recipeSubmit = document.getElementById("recipe-submit");
const contactMe = document.getElementById("contact-submit")
const popup = document.getElementsByClassName("popup");
const popupForm = document.getElementsByClassName("popup-form");

//Listeners for "Submit a Recipe" and "Contact Me" Buttons
submitInfo[0].addEventListener('click', function(){
  if (popup[1].style.visibility != "visible") {
  popup[0].style.visibility = "visible";
}});

submitInfo[1].addEventListener('click', function(){
  if (popup[0].style.visibility != "visible") {
  popup[1].style.visibility = "visible";
}});

//Handles each form when its "Submit" button is clicked.
recipeSubmit.addEventListener('click', function(){
  popup[0].style.visibility = "hidden";
});

recipeSubmit.addEventListener('click', function(){
  popup[1].style.visibility = "hidden";
});

//Clear Popup Forms with Escape
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      popup[0].style.visibility = "hidden";
      popup[1].style.visibility = "hidden";
    }
};

// Clear Popup Forms with Click Outside Forms

//Submit Recipe Form
document.addEventListener('click', function(evt) {
  const clickTarget = evt.target;
  if (clickTarget == popupForm[0]) {}
  else if (clickTarget == submitInfo[0]) {}
  else {popup[0].style.visibility = "hidden";}
})

//Contact Me Form
document.addEventListener('click', function(evt) {
  const clickTarget = evt.target;
  if (clickTarget == popupForm[1]) {}
  else if (clickTarget == submitInfo[1]) {}
  else {popup[1].style.visibility = "hidden";}
})
