const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);

const elementsEl = ingredients 
  .map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add(ingredient);
    // console.log(liEl);
    return liEl;
  });  
 
ingredientsEl.append(...elementsEl);
 console.log(ingredientsEl);


// Напиши скрипт, который для каждого элемента 
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию 
// в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

