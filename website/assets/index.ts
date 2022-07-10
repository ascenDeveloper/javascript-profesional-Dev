import MediaPlayer from 'adsmediaplayerlayer/lib/MediaPlayer';
import Autoplay from 'adsmediaplayerlayer/lib/plugins/Autoplay';
import AutoPause from 'adsmediaplayerlayer/lib/plugins/AutoPause';
import Ads from 'adsmediaplayerlayer/lib/plugins/Ads/Ads';


const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new AutoPause(), new Ads()],
});


const button1: HTMLElement = document.querySelector('#play')!;
button1.onclick = () => player.togglePlay();


const button2: HTMLElement = document.querySelector('#mute')!;
button2.onclick = () => player.mute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message);})
}