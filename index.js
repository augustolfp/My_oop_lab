window.onload = () => {
    console.log("Salve quebrada");

    let x1 = 200;
    let y1 = 200;

    let x2 = 200;
    let y2 = 200;

    const player1 = document.querySelector(".tiao");
    const player2 = document.querySelector(".maria");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    context.drawImage(player1, x1, y1, 100, 250);
    context.drawImage(player2, x2, y2, 100, 250);

    document.body.addEventListener("keydown", (e) => {
        const { key } = e;

        if (key === "ArrowRight") {
            moveRight1();
        }

        if (key === "ArrowLeft") {
            moveLeft1();
        }

        if (key === "ArrowUp") {
            jump1();
        }

        if (key === "d") {
            moveRight2();
        }

        if (key === "a") {
            moveLeft2();
        }

        if (key === "w") {
            jump2();
        }

        animate();
    });

    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(player1, x1, y1, 100, 250);
        context.drawImage(player2, x2, y2, 100, 250);
    }

    function moveRight1() {
        x1 = x1 + 10;
    }

    function moveLeft1() {
        x1 = x1 - 10;
    }

    function jump1() {
        y1 = y1 - 50;
        setTimeout(() => {
            y1 = y1 + 50;
        }, 1000);
    }

    function moveRight2() {
        x2 = x2 + 10;
    }

    function moveLeft2() {
        x2 = x2 - 10;
    }

    function jump2() {
        y2 = y2 - 50;
        setTimeout(() => {
            y2 = y2 + 50;
        }, 1000);
    }
};
