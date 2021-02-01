const myName = 'Shifat';
// myName = 'Rony'; //const is fixed variable. can't change latter.
console.log(myName);

const number =[3, 5, 1, 6, 2];
const human = {name: 'shifat', age: 22, phone: 123434}
// number = ['shifat', 'rifat', 'sabri']; //same as array and object, can't change const variable later.
number[2] = 10;
number.push(4); //but we can use others array method like push, pop, shift, unshift, update in const variable.
number.pop();
console.log(number);

/*****************************************/

let patientName = 'rahim chacha';
patientName = 'karim chacha'; // let variable is changeable, it let your variable changed. and let is scope variable. It isn't available outside of its scope.
console.log(patientName);

let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i); // error; i is declared with let, so you cant find it without its own scope.