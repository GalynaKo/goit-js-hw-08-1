import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const vidPlayer = new Player(iframe);

const VIDEOPLAY_TIME_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(VIDEOPLAY_TIME_KEY)
  ? localStorage.getItem(VIDEOPLAY_TIME_KEY)
  : 0;
console.log();
//Добавь в проект библиотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

vidPlayer.on(('timeupdate', throttle(onTimeUpdate, 1000)));
vidPlayer.setCurrentTime(currentTime);
vidPlayer.on('play', function () {
  console.log('playd the video!');
});
vidPlayer.getVideoTitle().then(function (title) {
  console.log('title', title);
});
//При перезагрузке страницы воспользуйся методом setCurrentTime()
//для того чтобы возобновить воспроизведение с сохраненной позиции.
function onTimeUpdate(e) {
  localStorage.setItem(VIDEOPLAY_TIME_KEY, e.seconds);
}
