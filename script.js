let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const defaultBackgroundColor = "white";
let isDrawing = false;

canvas.fillStyle = defaultBackgroundColor;
canvas.addEventListener("mousedown", startDrawing, false);
canvas.addEventListener("mouseup", stopDrawing, false);
canvas.addEventListener("mousemove", draw, false);

function startDrawing(event) {
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();
    isDrawing = true;
}

function draw(event) {
    if (isDrawing === true) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
    }
}

function stopDrawing(event) {
    isDrawing = false;
}

function clearCanvas() {
    context.fillStyle = defaultBackgroundColor;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
}
