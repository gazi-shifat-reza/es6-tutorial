class Parents{
    constructor() {
        this.fatherName = 'Tasfir Rahman';
    }
}
// Inheriting two class
class Child extends Parents{  //Inherit class using extends
    constructor(name, age){
        super()     //called inherit class using super()
        this.name = name;
        this.age = age;
    }
}

const baby1 = new Child('swagata', 3);
const baby2 = new Child('Somapto', 2);
console.log(baby1, baby2);