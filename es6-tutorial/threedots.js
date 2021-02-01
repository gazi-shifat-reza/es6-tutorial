const ages = [21, 22, 23, 24];
const ages2 = [22, 24, 25];
const names = ['joy', 'akif', 'bipu']

// const allAges = ages.concat(ages2).concat([54]).concat(names).concat(['ashiq']);    // Older way to concat the arrays.

const allAges = [...ages , 5,  ...ages2, 'ashik', ...names];
console.log(allAges);

const business = 532;
const minister = 456;
const cricketer = 450;

const richMan = Math.max(business, minister, cricketer);  //getting max from variable
console.log(richMan);

const salary = [9876, 9271, 9782];
const richestPerson = Math.max(...salary);      //getting max from an array using spread operator. 
console.log(richestPerson);
