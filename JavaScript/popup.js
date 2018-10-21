//Controls pop-up menu when "Submit a Recipe" or "Cotact Me" Buttons are clicked.

const submitInfo = document.getElementsByClassName("submit-info");
const recipeSubmit = document.getElementById("recipe-submit");
const contactMe = document.getElementById("contact-submit")
const popup = document.getElementsByClassName("popup");

//Listeners for "Submit a Recipe" and "Contant Me" Buttons
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
