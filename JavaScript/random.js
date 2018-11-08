const random = Math.floor(Math.random()*12)+1;
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
}
