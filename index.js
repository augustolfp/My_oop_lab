window.onload = () => {
    console.log("Salve quebrada");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    // O plano cartesiano nesse caso tem o ponto de origem no canto superior esquerdo;

    context.beginPath();
    context.rect(20, 20, 460, 460);
    context.fill();
};
