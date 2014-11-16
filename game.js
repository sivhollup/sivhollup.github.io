console.log("script loaded");
var context;

var drawCanvas = function() {
    var canvas = document.getElementById("gameCanvas");
    canvas.addEventListener('click', drawSquare, false);
    context = canvas.getContext("2d");
};

var drawSquare = function(event) {
    var x = event.pageX;
    var y = event.pageY;
    console.log(x + " " + y);
    context.rect(x, y, 15, 15);
    context.stroke();
};
