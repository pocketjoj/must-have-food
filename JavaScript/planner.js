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
