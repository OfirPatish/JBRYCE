class Shape {
  constructor(x, y, color) {
    this._x = x;
    this._y = y;
    this._color = color;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  distanceFromOrigin() {
    // let distance = Math.sqrt(this.x * this.x + this.y * this.y);
    let distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    return `Distance from origin: ${distance}`;
  }

  toString() {
    return `x=${this.x},y=${this.y},color=${this.color}`;
  }
}

let shape = new Shape(10, 20, "blue");

console.log(shape.distanceFromOrigin());
console.log(shape.toString());
console.log("=====================================");

class Circle extends Shape {
  static PI = 3.14;

  constructor(x, y, color, radius) {
    super(x, y, color);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  getArea() {
    // return `Area of Circle: ${Circle.PI * this.radius * this.radius}`;
    return `Area of Circle: ${Circle.PI * Math.pow(this.radius, 2)}`;
  }

  getPerimeter() {
    return `Perimeter of Circle: ${2 * Circle.PI * this.radius}`;
  }

  toString() {
    return super.toString() + `,radius=${this.radius}`;
  }
}

let circle = new Circle(10, 20, "blue", 5);

console.log(circle.distanceFromOrigin());
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());
console.log(`PI = ${Circle.PI}`);
