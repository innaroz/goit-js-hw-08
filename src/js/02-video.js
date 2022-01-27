import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

if (localStorage.getItem('videoTime')) {
  player.setCurrentTime(localStorage.getItem('videoTime'));
}

player.on('timeupdate', throttle((time) => {
  localStorage.setItem('videoTime', time.seconds);
}, 1000, { trailing: false }));
