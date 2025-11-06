// How to declare a variable 

const fatherName = 'Arnold';

let season = 'rainy';

season = 'winter';


//  6 basic conditions >, <, ===, !==, <=, >=

if(fatherName === 'arnold' || season === 'rainy'){
    console.log('jabon na')
}else if(season){
    console.log('jai ni')
}
else{
    console.log('ami jabo')
}


// 3. Array declare
// index
// Length, push, pop,

const numbers = [89, 35, 12];
numbers[0] = 14;

console.log(numbers);

// 4. for loop

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];

    console.log(number)

}


// 5. function

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}


const output = multiply(22, 5);

console.log(output)




// 6. Object

const student ={
    name: 'salam',
    age: 32,
    work: 'Imam of mosque'
}

const myVariable = 'age'

console.log(student.age) // direct by property

console.log(student['age']) // access via property name string

console.log(student[myVariable]) // access via propery name in a variable

