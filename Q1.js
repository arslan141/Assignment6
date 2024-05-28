class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

// Example usage:
let rectangle = new Rectangle(5, 4);
console.log("Area of Rectangle:", rectangle.area());

let square = new Square(5);
console.log("Area of Square:", square.area());
