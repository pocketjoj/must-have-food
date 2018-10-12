//Controls pop-up menu when "Submit a Recipe" Button is clicked.

const submitButton = document.getElementsByClassName("submit-recipe");
const finalSubmit = document.getElementById("final-submit");
const popup = document.getElementsByClassName("recipe-form");

submitButton[0].addEventListener('click', function(){
  popup[0].style.visibility = "visible";
});

finalSubmit.addEventListener('click', function(){
  popup[0].style.visibility = "hidden";
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      popup[0].style.visibility = "hidden";
    }
};
