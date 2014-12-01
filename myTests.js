function moveSquareMovesTheSquareInBothDimensions() {
    var square = makeBasicSquare();
    var expected = 101;

    square.computeSquareMove();

    MyTestFramework.assertThat(square.x, expected);
    MyTestFramework.assertThat(square.y, expected);
}

function bounceSquareBackWhenHittingRightEdgeOfCanvas() {
    var square = makeBasicSquare();
    square.x = 385;
    var expected = 384;

    square.computeSquareMove();

    MyTestFramework.assertThat(square.x, expected);
}

function bounceSquareBackWhenHittingLeftEdgeOfCanvas() {
    var square = makeBasicSquare();
    square.x = 0;
    square.goingRight = -1;
    var exptected = 1;

    square.computeSquareMove();

    MyTestFramework.assertThat(square.x, exptected);
}

function bounceSquareBackWhenHittingBottomEdgeOfCanvas() {
    var square = makeBasicSquare();
    square.y = 385;
    var expected = 384;

    square.computeSquareMove();

    MyTestFramework.assertThat(square.y, expected);
}

function bounceSquareBackWhenHittingTopEdgeOfCanvas() {
    var square = makeBasicSquare();
    square.y = 0;
    square.goingDown = -1;
    var expected = 1;

    square.computeSquareMove();

    MyTestFramework.assertThat(square.y, expected);
}

function bounceSquareHorisontallyWhenCollidingWithAnotherSquare() {
    var items = new Squares();
    var square = makeBasicSquare();
    var square2 = makeBasicSquare();
    square2.x += 8;
    square2.goingRight = -1;
    items.squares.push(square);
    items.squares.push(square2);
    var expected = square.x - 1;
    var expected2 = square2.x + 1;

    items.detectCollisions();
    square.computeSquareMove();
    square2.computeSquareMove();

    MyTestFramework.assertThat(square.x, expected);
    MyTestFramework.assertThat(square2.x, expected2);
}

function makeBasicSquare() {
    var square = new Square();
    square.x = 100;
    square.y = 100;
    return square;
}


(function () {
    moveSquareMovesTheSquareInBothDimensions();
    bounceSquareBackWhenHittingRightEdgeOfCanvas();
    bounceSquareBackWhenHittingLeftEdgeOfCanvas();
    bounceSquareBackWhenHittingBottomEdgeOfCanvas();
    bounceSquareBackWhenHittingTopEdgeOfCanvas();
    bounceSquareHorisontallyWhenCollidingWithAnotherSquare();
})();
