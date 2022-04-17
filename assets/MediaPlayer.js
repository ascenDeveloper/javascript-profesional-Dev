function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugins => {
        plugins.run(this);
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

MediaPlayer.prototype.mute = function() {
    let audio = this.media.muted
    this.media.muted = true;
    if (audio) {
        this.media.muted = false
    } else {
        this.media.muted = true
    }
}

MediaPlayer.prototype.unmute = function() {
    this.media.unmute = false;
}

export default MediaPlayer;