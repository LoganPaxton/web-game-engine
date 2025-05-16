const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");

function loop() {
    requestAnimationFrame(loop);

    const bg_color = document.getElementById("bg-color").value;
    const border_toggle = document.getElementById("border").checked;

    if (border_toggle) {
        canvas.style.border = "1px solid white"
    } else {
        canvas.style.border = "none"
    }

    ctx.fillStyle = bg_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

loop();
