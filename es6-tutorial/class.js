class Student{          //class declaration
    constructor(sName, sAge){       //creating object using constructor
        this.name = sName;
        this.age = sAge;
        this.school = 'Rifles public School';
    }
}

const student1 = new Student('Rony', 22);   // access the property
const student2 = new Student('Rishad', 21);
console.log(student1.school);
console.log(student2.name);
console.log(student1, student2);