// function add(a, b){         //Function expression
//     return a + b;
// }

// const doubleIt = function myFunc(num){       //Function declaration 
//     return num * 2;
// }

const doubleIt = num => num * 2;    // arrow function with one parameter
const add = (a, b) => a + b;    // arrow function with two parameter
const give7 = () => 7;    // arrow function with no parameter
const doMath = (x, y) =>{       // arrow function with multiple line and task;
    const add = x + y;
    const subs = x - y;
    const Multiply = add * subs;
    return Multiply;
}

const resultDouble = doubleIt(5);
const resultAdd = add(5, 7);
const resultGive7 = give7();
const resultDoMath = doMath(10, 5);

console.log(resultDouble);
console.log(resultAdd);
console.log(resultGive7);
console.log(resultDoMath);
