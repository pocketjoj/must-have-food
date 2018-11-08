const random = Math.floor(Math.random()*12)+1;
<<<<<<< HEAD

if (random == 1){
  window.location.replace("Recipes/BeerBread.pdf");
} else if (random == 2){
  window.location.replace("Recipes/BlackBeans.pdf");
} else if (random == 3){
  window.location.replace("Recipes/ChickenandRice.pdf");
} else if (random == 4){
  window.location.replace("Recipes/ChickenParmesan.pdf");
} else if (random == 5){
  window.location.replace("Recipes/Fried-Chicken-Kale-Slaw.pdf");
} else if (random == 6){
  window.location.replace("Recipes/FriedRice101.pdf");
} else if (random == 7){
  window.location.replace("Recipes/GUACAMOLE.pdf");
} else if (random == 8){
  window.location.replace("Recipes/OrzoPastaSalad.pdf");
} else if (random == 9){
  window.location.replace("Recipes/ParmesanCrustedChicken.pdf");
} else if (random == 10){
  window.location.replace("Recipes/redbeans.pdf");
} else if (random == 11){
  window.location.replace("Recipes/StuffedJalapenos.pdf");
} else {
  window.location.replace("Recipes/ChickenandOrzo.pdf");
=======
const recipeLink = document.getElementById("recipe-link");

if (random == 1){
  recipeLink.href = "../Recipes/Recipes/BeerBread.pdf";
} else if (random == 2){
  recipeLink.href = "../Recipes/Recipes/BlackBeans.pdf";
} else if (random == 3){
  recipeLink.href = "../Recipes/Recipes/ChickenandRice.pdf";
} else if (random == 4){
  recipeLink.href = "../Recipes/Recipes/ChickenParmesan.pdf";
} else if (random == 5){
  recipeLink.href = "../Recipes/Recipes/Fried-Chicken-Kale-Slaw.pdf";
} else if (random == 6){
  recipeLink.href = "../Recipes/Recipes/FriedRice101.pdf";
} else if (random == 7){
  recipeLink.href = "../Recipes/Recipes/GUACAMOLE.pdf";
} else if (random == 8){
  recipeLink.href = "../Recipes/Recipes/OrzoPastaSalad.pdf";
} else if (random == 9){
  recipeLink.href = "../Recipes/Recipes/ParmesanCrustedChicken.pdf";
} else if (random == 10){
  recipeLink.href = "../Recipes/Recipes/redbeans.pdf";
} else if (random == 11){
  recipeLink.href = "../Recipes/Recipes/StuffedJalapenos.pdf";
} else {
  recipeLink.href = "../Recipes/Recipes/ChickenandOrzo.pdf";
>>>>>>> 70ba844ec5e43b902a5a661e52089f9ba31c0b87
}
