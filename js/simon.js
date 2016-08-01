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
