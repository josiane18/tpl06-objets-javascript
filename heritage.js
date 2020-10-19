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

class Square extends Shape {

  constructor(sideLength) {
      super("square", 4, sideLength);

  }

  calcArea() {
      return this.sideLength * this.sideLength;

  }

}

let square = new Square(5);
console.log("L'aire d'un carre:  " + square.calcArea());
console.log("Le triangle du square est :  " + square.calperimeter());

