// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
// подставляет его текущее значение
// в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
console.dir(inputEl);
const nameEl = document.querySelector('#name-output');
console.log(nameEl);

inputEl.oninput = () => {
  if (inputEl.value === '') {
    nameEl.textContent = 'незнакомец';
    return;
  }
  nameEl.textContent = inputEl.value;
}


