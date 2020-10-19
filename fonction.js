function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;

}
let square = new Shape("square", 4, 5);
Shape.prototype.calperimeter = function() {

  return this.sides * this.sideLength;
}

console.log("Le triangle du square est :  " + square.calperimeter());
let triangle = new Shape("Triangle", 3, 3);
console.log("Le triangle du triangle est : " + triangle.calperimeter());


