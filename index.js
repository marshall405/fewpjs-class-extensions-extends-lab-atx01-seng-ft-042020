// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((side, memo) => memo + side)
    }
}

class Triangle extends Polygon {

    get isValid() {
        const sides = this.sides;
        if (
            (sides[0] + sides[1] <= sides[2]) ||
            (sides[0] + sides[2] <= sides[1]) ||
            (sides[1] + sides[2] <= sides[0])
        ) {
            return false;
        }
        return true;
    }

}

class Square extends Polygon {
    get isValid() {
        const sides = this.sides;
        for (let i = 0; i < sides.length; i++) {
            if (sides[i] == sides[0]) {
                continue;
            }
            return false;
        }
        return true;
    }

    get area() {
        return this.sides[0] ** 2;
    }
}