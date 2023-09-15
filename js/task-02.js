const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {

  const liElement = document.createElement("li");

  liElement.classList.add("item");

  liElement.textContent = ingredient;

  ingredientsList.appendChild(liElement);
});