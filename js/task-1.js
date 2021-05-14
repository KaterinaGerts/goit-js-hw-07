const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

const newArray = [...itemEl]
// console.log(newArray);
.forEach.call(itemEl, (elem) => {
     const titleEl = elem.querySelector('h2').textContent;
     const itemsLengthEl = elem.querySelectorAll('li').length;
   console.log(`Категория: ${titleEl} 
Количество элементов: ${itemsLengthEl}`);
 });






