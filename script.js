window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Set up the square
    var squareSize = 40;
    var squareX = (screen.width - squareSize) / 2;
    var squareY = 0;
    var columnSquares = Math.round(screen.width / squareSize);
    var rowSquares = Math.round(screen.height / squareSize);
    console.log(columnSquares, ", ", rowSquares, ": ", columnSquares * rowSquares);

    function updateCanvas() {
        canvas.width = screen.width;
        canvas.height = screen.height;
        squareX = (screen.width - squareSize) / 2;
        // Resize the canvas to fill the window

        // Update the square position
        squareY += 5;

        // Draw the square on the canvas
        ctx.clearRect(0, 0, screen.width, screen.height);
        ctx.beginPath();
        for (let row = 0; row < rowSquares; row++) {
            for (let col = 0; col < columnSquares; col++) {
                ctx.rect(col * squareSize, row * squareSize, squareSize, squareSize);

            }
        }
        ctx.stroke();
    }

    // Call updateCanvas initially to set the initial dimensions
    updateCanvas();

    // Add an event listener for the window resize event
    window.addEventListener('resize', updateCanvas);

    setInterval(updateCanvas, 20);
};
