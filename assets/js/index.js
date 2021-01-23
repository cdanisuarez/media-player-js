import MediaPlayer from './media-player.js';
import AutoPlay from './plugins/auto-play.js';

const video = document.querySelector('video');
const playButton = document.querySelector('#play');
const playMute = document.querySelector('#mute');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

playButton.onclick = () => player.play();
playMute.onclick = () => player.mute();