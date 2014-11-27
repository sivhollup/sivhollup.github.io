var MyGame = function () {
    this.canvas = null;
    this.context = null;
    this.squares = [];

    this.makeSquare = function (event) {
        var square = new Square();
        square.x = event.pageX;
        square.y = event.pageY;
        this.squares.push(square);
    };


    this.redraw = function () {
        if (this.context === undefined) {
            return;
        }
        this.context.clearRect(0, 0, 400, 400);
        var context = this.context;
        this.squares.forEach(function (square) {
            square.computeSquareMove();
            context.beginPath();
            context.rect(square.x, square.y, 15, 15);
            context.stroke();
            context.closePath();
        });
    };
};

var gameLoop = function () {
    if (game.squares === undefined) {
        return;
    }
    window.requestAnimationFrame(gameLoop);
    game.redraw();
};

var Square = function () {
    this.x = -1;
    this.y = -1;

    this.computeSquareMove = function () {
        this.x += 2;
        this.y += 2;
    };
};

var game = new MyGame();

drawCanvas = function () {
    game.canvas = document.getElementById("gameCanvas");
    game.canvas.height = 400;
    game.canvas.width = 400;
    game.canvas.addEventListener('click', function(event) { game.makeSquare(event); }, false);
    game.context = game.canvas.getContext("2d");
};

gameLoop();
