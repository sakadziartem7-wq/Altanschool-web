'use strict';

const form = document.querySelector('.form');
const resultContainer = document.querySelector('.follow__result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = form.querySelector('[name="name"]').value;
    let email = form.querySelector('[name="email"]').value;
    let message = form.querySelector('[name="message"]').value;

    console.log('ЗАРЕГИСТРИРОВАН НОВЫЙ ПОЛЬЗОВАТЕЛЬ!');
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    resultContainer.innerHTML = `
        <p>Имя: ${name}</p>
        <p>Email: ${email}</p>
        <p>Сообщение: ${message}</p>
    `;
});