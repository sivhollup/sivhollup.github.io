console.log("script loaded");
var context;
var squares = [];


var drawCanvas = function () {
    var canvas = document.getElementById("gameCanvas");
    canvas.height = 400;
    canvas.width = 400;
    canvas.addEventListener('click', makeSquare, false);
    context = canvas.getContext("2d");
};


var makeSquare = function (event) {
    square = {
        x: event.pageX,
        y: event.pageY,
        goingRight: 1,
        goingDown: 1
    };
    squares.push(square);
};

var gameLoop = function () {
    if (squares.size === 0) {
        return;
    }
    window.requestAnimationFrame(gameLoop);
    redraw();
};

var redraw = function () {
    if(!context) return;

    context.clearRect(0, 0, 400, 400);
    squares.forEach(function (square) {
        square = computeMove(square);
        context.beginPath();
        context.rect(square.x, square.y, 15, 15);
        context.stroke();
        context.closePath();
    })
};

var computeMove = function (square) {
    adjustHorisontalDirection(square);
    adjustVerticalDirection(square);
    square.x += 2 * square.goingRight;
    square.y += 2 * square.goingDown;
    return square;
};

var adjustHorisontalDirection = function (square) {
    if (square.goingRight === 1 && rightEdgeIsReached(square)) {
        square.goingRight = -1;
    }

    if (square.goingRight === -1 && leftEdgeIsReached(square)) {
        square.goingRight = 1;
    }
};

var adjustVerticalDirection = function (square) {
    if (square.goingDown === 1 && bottomEdgeIsReached(square)) {
        square.goingDown = -1;
    }

    if (square.goingDown === -1 && topEdgeIsReached(square)) {
        square.goingDown = 1;
    }
};

var rightEdgeIsReached = function (square) {
    return (square.x >= 385);
};

var leftEdgeIsReached = function (square) {
    return (square.x <= 1);
};

var bottomEdgeIsReached = function (square) {
    return (square.y >= 385);
};

var topEdgeIsReached = function (square) {
    return (square.y <= 1);
};

gameLoop();