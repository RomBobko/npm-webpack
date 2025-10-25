// ДЛЯ ВИКОРИСТАННЯ БІБЛІОТЕКИ ВИКОРИСТОВУЄМО joi/express/uuid...
// const Joi = require('joi');

// СТВОРЮЄМО ВЕБ СЕРВЕР
const express = require('express');
const app = express();

const listenner = app.listen(4444, () => {
    console.log(`веб сервер запущений на порті ${listenner.address().port}`);
});
// // читати docs на сайті
// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('qwerwf'));

// node app.js -в терміналі валідірує пароль замість консолі
