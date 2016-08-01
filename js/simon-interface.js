var Simon = require("./../js/simon.js").simonModule;

$(document).ready(function(){
  $("#start").click(function(event){
    var game = new Simon();
    game.addColor();
    drawColors(game.colorArray);
    var attemptArray = [];
    $(".simon-button").click(function(){
      var color = $(this).attr("id");
      attemptArray.push(color);
      if (attemptArray.length == game.colorArray.length) {
        var bool = game.attempt(attemptArray);
        if (!bool) alert("You lose!");
        else {
          attemptArray = [];
          game.addColor();
          drawColors(game.colorArray);
        }
      }
    });
  });
});

var drawColors = function(colorArray) {
  var i = 0;
  var drawColor = setInterval(function(){
    switch(colorArray[i]) {
      case "red":
        $(".red").addClass("red-highlight");
        setTimeout(function(){$('.red').removeClass('red-highlight');}, 200);
        break;
      case "blue":
        $(".blue").addClass("blue-highlight");
        setTimeout(function(){$('.blue').removeClass('blue-highlight');}, 200);
        break;
      case "yellow":
        $(".yellow").addClass("yellow-highlight");
        setTimeout(function(){$('.yellow').removeClass('yellow-highlight');}, 200);
        break;
      case "green":
        $(".green").addClass("green-highlight");
        setTimeout(function(){$('.green').removeClass('green-highlight');}, 200);
        break;
      default:
        break;
    }
    i++;
    if (i === colorArray.length) clearInterval(drawColor);
  }, 400);
};
