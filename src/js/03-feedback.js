
import throttle from 'lodash.throttle';

const inputs = document.querySelectorAll('input, textarea');

const formData = localStorage.getItem('feedback-form-state');

if (formData) {
  const parsedData = JSON.parse(formData);
  Object.keys(parsedData).forEach((key) => {
    const element = document.querySelector(`[name='${key}']`);
    element.value = parsedData[key];
  });
}

inputs.forEach((input) => {
  input.addEventListener('keyup', throttle((time) => {
    const existData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    const data = JSON.stringify({ ...existData, [input.name]: input.value });
    localStorage.setItem('feedback-form-state', data);
  }, 500, { trailing: false }));
});

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formIsNotCompleted = ![...form.querySelectorAll('input, textarea')].every((input) => input.value);

  if (formIsNotCompleted) {
    return;
  }

  const parsedData = JSON.parse(formData);
  Object.keys(parsedData).forEach((key) => {
    console.log(`${key}: ${parsedData[key]}`);
    const element = document.querySelector(`[name='${key}']`);
    element.value = '';
  });
  localStorage.removeItem('feedback-form-state');
})
