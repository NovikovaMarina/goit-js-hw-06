const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(ingredient => {
  let listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.className = "item";
  return listEl;
})
let ulEl = document.getElementById('ingredients');
ulEl.append(...list);

