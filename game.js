console.log("script loaded");
var context;
var square = null;


var drawCanvas = function() {
    var canvas = document.getElementById("gameCanvas");
    canvas.height = 400;
    canvas.width = 400;
    canvas.addEventListener('click', makeSquare, false);
    context = canvas.getContext("2d");
};

var makeSquare = function (event) {
    square = {x : event.pageX, y : event.pageY};
};

function draw(){
    window.requestAnimationFrame(draw);

    if(square === null){
        return;
    }

    context.clearRect(0, 0, 400, 400);
    context.beginPath()
    context.rect(square.x, square.y, 15, 15);
    context.stroke();
    context.closePath();

    square.x += 2;
    square.y += 2;

}
draw();