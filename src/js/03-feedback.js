const throttle = require('lodash.throttle');
const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('[name="email"]'),
  textEl: document.querySelector('[name="message"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
//4 * Сделай так, чтобы хранилище обновлялось
//не чаще чем раз в 500 миллисекунд.
//Для этого добавь в проект и используй библиотеку lodash.throttle.
//('timeupdate', throttle(onTimeUpdate, 500 ml))
refs.formEl.addEventListener('input', throttle(onInput, 500));
const KEY_FORM_VALUE = 'feedback-form-state';
let formData = {};
if (localStorage.getItem(KEY_FORM_VALUE)) {
  //formData = JSON.parse(localStorage.getItem(KEY_FORM_VALUE));
  refs.emailEl.value = formData.email;
  refs.textEl.value = formData.message;
}
//1*Отслеживай на форме событие input, и каждый раз записывай
// в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы.
//Пусть ключом для хранилища будет строка "feedback-form-state".
function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY_FORM_VALUE, JSON.stringify(formData));
  console.dir(formData);
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(FormData);
  e.currentTarget.reset();
  localStorage.removeItem(KEY_FORM_VALUE);
}

//2* При загрузке страницы проверяй состояние хранилища,
//и если там есть сохраненные данные, заполняй ими поля формы.
//В противном случае поля должны быть пустыми.

//3* При сабмите формы очищай хранилище и поля формы,
//а также выводи объект с полями email, message и
//текущими их значениями в консоль.
