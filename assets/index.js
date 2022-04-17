import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new Autoplay] });

const button1 = document.querySelector('#play');
button1.onclick = () => player.togglePlay();

const button2 = document.querySelector('#mute');
button2.onclick = () => player.mute();