class Shape {

  constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
  }


  calperimeter() {
      return this.sides * this.sideLength;
  }
}

let square = new Shape("square", 4, 5);
console.log("Le triangle du square est :  " + square.calperimeter());
let triangle = new Shape("Triangle", 3, 3);
console.log("Le triangle du triangle est : " + triangle.calperimeter());


