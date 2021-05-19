// Напиши скрипт, который для каждого элемента 
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию 
// в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

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
    // console.log(ingredient);
    const liEl = document.createElement('li');    
    // console.log(liEl);    
   liEl.innerHTML =ingredient;    
     return liEl;
  });
  
ingredientsEl.append(...elementsEl);
console.log(ingredientsEl);




