export default class Player {
    constructor(x, y, image, controls) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.controls = controls;

        this.setUpControls();
    }

    setUpControls() {
        document.addEventListener("keydown", (e) => {
            const [up, right, bottom, left] = this.controls;

            const { key } = e;

            if (key === up) this.jump();
            if (key === right) this.right();
            if (key === left) this.left();
        });
    }

    right() {
        this.x = this.x + 10;
    }

    left() {
        this.x = this.x - 10;
    }

    jump() {
        this.y = this.y - 50;
        setTimeout(() => {
            this.y = this.y + 50;
        }, 1000);
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}
