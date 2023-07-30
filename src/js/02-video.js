// Подзадача 1: Добавляем библиотеку Vimeo плеера как зависимость проекта через npm
import Vimeo from '@vimeo/player';

// Подзадача 2: Инициализируем плеер и отслеживаем событие timeupdate
const player = new Vimeo('vimeo-player');

// Подзадача 3: Сохраняем время воспроизведения в локальное хранилище
import throttle from 'lodash.throttle';

const saveCurrentTimeThrottled = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', saveCurrentTimeThrottled);

// Подзадача 4: При перезагрузке страницы возобновляемт воспроизведение с сохраненной позиции
document.addEventListener('DOMContentLoaded', async () => {
  const savedCurrentTime = localStorage.getItem('videoplayer-current-time');

  if (savedCurrentTime) {
    await player.setCurrentTime(savedCurrentTime);
  }
});
