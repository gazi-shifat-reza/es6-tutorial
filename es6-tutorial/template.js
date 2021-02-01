const firstName = 'akif';
const secondName = 'hasan';
const fullName = firstName + ' ' + secondName + ' is a good boy'; //traditional way

const fullName1 = `${firstName} ${secondName} is a good boy`; //template way declaration
const fullName2 = `${firstName} ${10+20} is a good boy`; // for multiline
const multiLine = `This is asiq
He is a loyal boy
but he doesn't have gf`
console.log(fullName);
console.log(fullName1);
console.log(multiLine);