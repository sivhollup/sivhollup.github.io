var MyGame = function () {
    this.canvas = null;
    this.context = null;
    this.allElements = new Squares();

    this.makeSquare = function (event) {
        var square = new Square();
        square.x = event.pageX;
        square.y = event.pageY;
        this.allElements.squares.push(square);
    };

    this.redraw = function () {
        if (this.context === undefined) {
            return;
        }
        this.context.clearRect(0, 0, 400, 400);
        var context = this.context;
        this.allElements.detectCollisions();
        this.allElements.squares.forEach(function (square) {
            square.computeSquareMove();
            context.beginPath();
            context.rect(square.x, square.y, 16, 16);
            context.stroke();
            context.closePath();
        });
    };
};

var Square = function () {
    this.x = -1;
    this.y = -1;
    this.goingRight = 1;
    this.goingDown = 1;
    this.collided = false;

    this.computeSquareMove = function () {
        this.detectEdges();
        this.adjustDirectionForCollisions();
        this.x += 1*this.goingRight;
        this.y += 1*this.goingDown;
    };

    this.adjustDirectionForCollisions = function() {
        if (this.collided === true) {
            this.goingDown = this.goingDown * -1;
            this.goingRight = this.goingRight * -1;
            this.collided = false;
        }
    };

    this.detectEdges = function () {
        if (this.x >= 385) {
            this.goingRight = -1;
        }

        if (this.x <= 0) {
            this.goingRight = 1;
        }

        if (this.y >= 385) {
            this.goingDown = -1;
        }

        if (this.y <= 0) {
            this.goingDown = 1;
        }
    };
};

var Squares = function () {
    this.squares = [];

    this.detectCollisions = function() {
        var i = 0;
        var j = 0;
        for (; i < this.squares.length; i++) {
            for (j = i; j < this.squares.length; j++) {
                if (j !== i) {
                    var square1 = this.squares[i];
                    var square2 = this.squares[j];
                    if ((square1.x < square2.x + 16) &&
                        (square2.x < square1.x + 16) &&
                        (square1.y < square2.y + 16) &&
                        (square2.y < square1.y + 16)) {
                        this.squares[i].collided = true;
                        this.squares[j].collided = true;
                    }
                }
            }
        }
    }

};

var gameLoop = function () {
    if (game.allElements.squares === undefined) {
        return;
    }
    window.requestAnimationFrame(gameLoop);
    game.redraw();
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
