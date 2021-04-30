let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

let player = {
    x: 20,
    y: 10,
    width: 40,
    height: 45
};
let playerImg = new Image;
playerImg.src = "player.png";
var speed = parseInt(document.getElementById("speed").value);
document.getElementById("speed").addEventListener("input", () => {
    if (document.getElementById("speed").value > 0) {
        speed = parseInt(document.getElementById("speed").value);
    }
});


window.addEventListener("keydown", (event) => {
    var key = event.key;
    if (key == "ArrowRight" && player.x <= canvas.width - player.width) {
        player.x += speed;
    }
    if (key == "ArrowLeft" && player.x >= 0) {
        player.x -= speed;
    }
    if (key == "ArrowUp" && player.y >= 10) {
        player.y -= speed;
    }
    if (key == "ArrowDown" && player.y <= canvas.height - player.height) {
        player.y += speed;
    }
});

let animate = () => {
    //BackGround
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Player
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    requestAnimationFrame(animate);
};
animate();