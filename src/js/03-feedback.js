const throttle = require('lodash.throttle');
//4 * Сделай так, чтобы хранилище обновлялось
//не чаще чем раз в 500 миллисекунд.
//Для этого добавь в проект и используй библиотеку lodash.throttle.
//('timeupdate', throttle(onTimeUpdate, 500 ml))

//1*Отслеживай на форме событие input, и каждый раз записывай
// в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы.
//Пусть ключом для хранилища будет строка "feedback-form-state".

//2* При загрузке страницы проверяй состояние хранилища,
//и если там есть сохраненные данные, заполняй ими поля формы.
//В противном случае поля должны быть пустыми.

//3* При сабмите формы очищай хранилище и поля формы,
//а также выводи объект с полями email, message и
//текущими их значениями в консоль.
