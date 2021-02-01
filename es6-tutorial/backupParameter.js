function add(num1, num2 = 10){  //we set 20 as a default parameter of num2. If num2 is not given when function being called then 10 will be passed as a default value for num2. 
    return num1 + num2;
}

const result = add(6);
console.log(result);