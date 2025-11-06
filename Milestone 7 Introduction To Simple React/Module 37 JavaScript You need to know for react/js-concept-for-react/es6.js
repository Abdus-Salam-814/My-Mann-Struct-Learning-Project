

const numbers = [89, 35, 12];

const student ={
    name: 'salam',
    age: 32,
    work: ['Imam of mosque', 'Programer in |Web Programming']
}


// Template String

const about = `My Name is ${student.name} age of ${student.age} has numer ${numbers[2]}  also like work ${student.work[1]}`


console.log(about)


// 2. arrow function

const getFiftyFive = () => 55;

console.log(getFiftyFive())

const addSixtyFive = (num = 0) => num + getFiftyFive();


console.log(addSixtyFive(10))


const isEven = x => x % 2 === 0;


console.log(isEven(8))


const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}


// spread oparator




