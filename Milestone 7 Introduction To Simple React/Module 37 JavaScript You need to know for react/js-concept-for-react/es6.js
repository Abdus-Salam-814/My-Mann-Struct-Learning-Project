

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
