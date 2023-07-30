// Подзадача 1: Отслеживаем на форме событие input и записываем в локальное хранилище
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Подзадача 2: Проверяем состояние хранилища при загрузке страницы и заполняем поля формы
document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
});

// Подзадача 3: Очищаем хранилище и поля формы при сабмите формы и выводим объект с данными в консоль
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.removeItem('feedback-form-state');
  form.reset();

  console.log(formData);
});

// Подзадача 4: Обновляем хранилище не чаще чем раз в 500 миллисекунд с помощью lodash.throttle
import throttle from 'lodash.throttle';

const saveFormStateThrottled = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormStateThrottled);
