class Shape {
  constructor(color) {
    this.color = color;
  }

  drawShape() {
    // code to draw the shape
  }

  calculateArea() {
    // code to calculate the area of the shape
  }
}

module.exports = Shape;

const Shape = require('./shape');

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
const Circle = require('./circle');

const myCircle = new Circle('red', 10);
console.log(myCircle.calculateArea()); // prints the area of the circle with radius 10