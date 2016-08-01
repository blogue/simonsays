(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.colorArray = [];
  this.score = 0;
}

Simon.prototype.addColor = function() {
  var rand = Math.ceil(Math.random()*4);
  switch(rand) {
    case 1:
      this.colorArray.push("red");
      break;
    case 2:
      this.colorArray.push("blue");
      break;
    case 3:
      this.colorArray.push("green");
      break;
    case 4:
      this.colorArray.push("yellow");
      break;
    default:
      console.log("you wrote the random function wrong you idiot");
  }
};

Simon.prototype.attempt = function(attemptArray) {
  for(var i = 0 ; i < attemptArray.length ; i++) {
    if (attemptArray[i] != this.colorArray[i]) return false;
  }
  return true;
};

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
var Simon = require("./../js/simon.js").simonModule;

$(document).ready(function(){
  $("#start").click(function(event){
    var game = new Simon();
    game.addColor();
    drawColors(game.colorArray);
    var attemptArray = [];
    $(".simon-button").click(function(){
      var color = $(this).attr("id");
      $("."+color).addClass(color+"-highlight");
      setTimeout(function(){$('.'+color).removeClass(color+'-highlight');},200);
      attemptArray.push(color);
      if (attemptArray.length == game.colorArray.length) {
        var bool = game.attempt(attemptArray);
        if (!bool) alert("You lose!");
        else {
          attemptArray = [];
          game.addColor();
          setTimeout(function(){drawColors(game.colorArray);},500);    
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

},{"./../js/simon.js":1}]},{},[2]);
