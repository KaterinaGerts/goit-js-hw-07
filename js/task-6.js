// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (e) => {
  if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    console.dir(inputEl);
     return;
  } 
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
})






