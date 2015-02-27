

/* Vector Field
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var sketch = function(s) {

  var locs, nodes;
  var hero = document.getElementsByClassName('hero')[0];

  s.init = function() {
    var res = 20;
    var countX = s.ceil(s.width/res) + 1;
    var countY = s.ceil(s.height/res) + 1;

    locs = [];
    nodes  = 0;

    for (var j = 0; j < countY; j++) {
      for (var i = 0; i < countX; i++) {
        locs.push( new p5.Vector(-res + res*i, res*j) );
      }
    };
    nodes = locs.length - 1;

    s.noFill();
    s.stroke(255, 255, 255, 75);
    s.strokeWeight(2);
  };

  s.setup = function() {
    s.createCanvas(1.01 * s.windowWidth, hero.offsetHeight);
    s.init();
  };

  s.draw = function() {
    s.background(254, 91, 100);

    for (var i = nodes; i >= 0; i--) {
      var h = s.calcVec( locs[i].x - s.mouseX, locs[i].y - s.mouseY);
      s.push();
        s.translate(locs[i].x, locs[i].y);
        s.rotate(h.heading());
        s.line(0, 0, 0, - 15);
      s.pop();
    };
  }

  s.calcVec = function(x, y) {
    return new p5.Vector(y - x, - x - y);
  };

  s.windowResized = function() {
    s.resizeCanvas(s.windowWidth, hero.offsetHeight);
    s.init();
  };
};


var myp5 = new p5(sketch, 'js-vector-field');
