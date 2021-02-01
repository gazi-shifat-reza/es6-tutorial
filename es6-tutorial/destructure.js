const person = {
    name: 'Shifat Reza',
    age: 22,
    job: 'Student',
    study: 'Collage',
    subject: 'CSE',
    phone: 015216856686,
    address: 'Dhaka'
}
// destructure on object
//object properties name must be right side and object name on the right side 
const {name, age, phone, subject} = person;
console.log(name, subject, age, phone);

// destructure on complex object.
const complexObject = {
    nickName: 'Dipjol',
    info: {
        address: 'Dhaka',
        occupation: 'Actor'
    }
}
const{occupation} = complexObject.info;  //way to get that complex object property.
console.log(occupation);

//destructure on array
let names = ['alim', 'kalim', 'shuvo', 'jalim', 'karim']; 
const [firstFriend, secondFriend, ...otherFriends] = names;
console.log(secondFriend);
console.log(otherFriends);
