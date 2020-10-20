class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height * 0.5;
    }
}

const shapes = [new Circle(10), new Rectangle(10, 10), new Triangle(10, 7)];

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.getArea());
}