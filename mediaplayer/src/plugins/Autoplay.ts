import MediaPlayer from "../MediaPlayer";

class Autoplay {
    constructor() {
    }
    //Autoplay para el video
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
            console.log(player.media.muted);
        }
        player.play();
    }
};



export default Autoplay;