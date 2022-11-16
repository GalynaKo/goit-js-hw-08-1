import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const vidPlayer = new Player(iframe);
vidPlayer.on(('timeupdate', throttle(onTimeUpdate, 1000)));

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
