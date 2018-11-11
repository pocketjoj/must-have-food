//Quick listener to display placeholder when shopping list button is clicked.

const plannerButton = document.getElementsByTagName("button");
const construction = document.getElementById("construction-pop");

construction.style.display = "none";

plannerButton[0].addEventListener('click', function(){
  if (construction.style.display == "none"){
      construction.style.display = "block"
    } else {
      construction.style.display = "none"
    }
});

//Clear Under Construction sign with Escape
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      construction.style.display = "none";
    }
};

// Clear Under Construction Sign with click anywhere
document.addEventListener('click', function(event){
  if (event.target != plannerButton[0]){
    construction.style.display = "none"
  }
});
