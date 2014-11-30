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
})();
