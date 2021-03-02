// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
        this.countSides = sides.length;
        this.perimeter = sides.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
}

class Triangle extends Polygon{
get isValid(){
    if( this.countSides === 3){
    const a = this.sides[0]
    const b = this.sides[1]
    const c = this.sides[2]
    return (a+b>c)&&(b+c>a)&&(c+a>b)
        }
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0]*this.sides[0]
    }
    get isValid(){
        if(this.countSides === 4){
        return this.sides[0]===this.sides[1]&&this.sides[0]===this.sides[2]&&this.sides[0]===this.sides[3]
    }
    }
}