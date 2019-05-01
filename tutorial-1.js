//Teaach NPM and Node installation

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class MathObject{
    constructor(){
        console.log('math object created');
    }
}

//First way to export, but it is too repetitive...
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.MathObject= MathObject;

//Better way to export with object literals
module.exports = {
    sum: sum, PI: PI, MathObject: MathObject
}