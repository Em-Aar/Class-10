//1- FILTER METHOD
//2- MAP METHOD
//3- REDUCE METHOD


//1- FILTER METHOD
const myNumber : number [] = [100, 101, 102, 103, 104];
const filteredNumber : number [] = myNumber.filter( element => {return element > 102} );
//console.log(filteredNumber);
//console.log(typeof(filteredNumber))

//Using Filter Method on Array of Objects
interface Student {
    name: string,
    age: number,
    gender: string
}

const students : Student[] = [
    {name: "Rehan", age: 16, gender:"Male"},
    {name: "Musa", age: 18, gender:"Male"},
    {name: "Abdullah", age: 24, gender:"Male"},
    {name: "Asad", age: 32, gender:"Male"},
    {name: "Hadia", age: 23, gender:"Female"},
    {name: "Zainab", age: 35, gender:"Female"},
    {name: "Fatima", age: 25, gender:"Female"},
    {name: "Maryam", age: 19, gender:"Female"},
    {name: "Laraib", age: 26, gender:"Female"},
    {name: "Amna", age: 19, gender:"Female"},
];

const filteredStudents : Student [] = students.filter( element => element.age < 25 && element.gender === 'Female' );
//console.table(filteredStudents);


// 2- MAP METHOD

const myNumber2 : number [] = [1, 2, 3, 4, 5]
const sqrdNumber = myNumber2.map( number => number**2 )
//console.log(sqrdNumber);


//3- REDUCE METHOD

const myNumber3 = [100, 200, 300, 400];

const result = myNumber3.reduce ((acc,val) => {
    console.log(`"Accumulator" ${acc} and 'current value' ${val}`) 
   return acc + val;
}, 0);

//console.log(result)


//Using Reduce method on Array of Objects
const myCart = [
    {product: "Sketchers", price: 25000, category: "Shoes"},
    {product: "Shirt", price: 5000, category: "Clothing"},
    {product: "Nike", price: 20000, category: "Shoes"},
    {product: "Addidas", price: 22000, category: "Shoes"},
    {product: "Trouser", price: 8000, category: "Clothing"},
];

const totalBill = myCart.reduce ((acc,val) => acc + val.price,250)
//console.log(totalBill);




// 4- CHAINING CONCEPT -- CHAINING ON FILTER AND REDUCE METHOD
const allCourses = [
    {coursename: "TypeScript", price: 3000},
    {coursename: "javaScript", price: 2500},
    {coursename: "HTML", price: 1000},
    {coursename: "CSS", price: 500},
];

const selectedCourses = ["TypeScript", "javaScript"];

const coursePrice = allCourses.filter (course => selectedCourses.includes(course.coursename))
    .reduce ((acc, course) => acc + course.price,0)

console.log(coursePrice)