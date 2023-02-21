import Player from "./player.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const image1 = document.querySelector(".tiao");
const image2 = document.querySelector(".maria");

const player1 = new Player(100, 250, image1, [
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
]);

const player2 = new Player(100, 250, image2, ["w", "d", "s", "a"]);

window.onload = () => {
    animate();
};

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw(context);
    player2.draw(context);
}
