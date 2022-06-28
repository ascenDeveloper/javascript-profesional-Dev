import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'
import AutoPause from './plugins/AutoPause.js'


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new Autoplay, new AutoPause] });


const button1 = document.querySelector('#play');
button1.onclick = () => player.togglePlay();


const button2 = document.querySelector('#mute');
button2.onclick = () => player.mute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message);})
}