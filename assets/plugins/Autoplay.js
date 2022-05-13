function Autoplay() {

};

//Autoplay para el video
Autoplay.prototype.run = function(player) {
    if (!player.muted) {
        player.muted = true;
    }
    player.play();
}


export default Autoplay;