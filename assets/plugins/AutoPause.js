class AutoPause {
    constructor() {
        this.threshold = 0.25;
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        })

        observer.observe(player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0];
        
        entry.intersectionRatio >= this.threshold

        this.player.play();
        this.player.pause();
    }
}

export default AutoPause;