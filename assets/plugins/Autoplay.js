function Autoplay() {

};

Autoplay.prototype.run = function(player) {
    player.mute();
    player.play();
}

export default Autoplay;