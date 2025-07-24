let startTime;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveShapeImmediately() {
    const wh = (Math.random() * 300) + 100; // Width/height between 100 and 400

    // Calculate maximum left/top so shape doesn't overflow the screen
    const maxWidth = window.innerWidth - wh;
    const maxHeight = window.innerHeight - wh;

    const left = Math.random() * maxWidth;
    const top = Math.random() * maxHeight;

    const shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    // shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    shape.style.borderRadius = "0"; // Always square
    shape.style.backgroundColor = getRandomColor();
    shape.style.display = "block";

    startTime = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    alert("Your Reaction Time: " + timeTaken + " seconds");
    moveShapeImmediately();
};

moveShapeImmediately();
