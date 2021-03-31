export class Loop {
    constructor(update, display) {
        this.update = update;
        this.display = display;

        this.deltaTime = 0;
        this.lastUrdate = 0;
        this.maxInterval = 40;

        requestAnimationFrame(stampTime => this.animate(stampTime));
    }
    animate(currentTime) {
        requestAnimationFrame(stampTime => this.animate(stampTime));
        this.deltaTime = currentTime - this.lastUrdate;

        if (this.deltaTime < this.maxInterval) {
            this.update(this.deltaTime / 1000);
            this.display();
        }

        this.lastUrdate = currentTime;
    }
}