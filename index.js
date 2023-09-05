//1- FILTER METHOD
//2- MAP METHOD
//3- REDUCE METHOD
var myNumber = [100, 101, 102, 103, 104];
var filteredNumber = myNumber.filter(function (element) { return element > 102; });
var students = [
    { name: "Rehan", age: 16, gender: "Male" },
    { name: "Musa", age: 18, gender: "Male" },
    { name: "Abdullah", age: 24, gender: "Male" },
    { name: "Asad", age: 32, gender: "Male" },
    { name: "Hadia", age: 23, gender: "Female" },
    { name: "Zainab", age: 35, gender: "Female" },
    { name: "Fatima", age: 25, gender: "Female" },
    { name: "Maryam", age: 19, gender: "Female" },
    { name: "Laraib", age: 26, gender: "Female" },
    { name: "Amna", age: 19, gender: "Female" },
];
var filteredStudents = students.filter(function (element) { return element.age < 25 && element.gender === 'Female'; });
//console.table(filteredStudents);
// 2- MAP Method
var myNumber2 = [1, 2, 3, 4, 5];
var sqrdNumber = myNumber2.map(function (number) { return Math.pow(number, 2); });
//console.log(sqrdNumber);
//3- REDUCE
var myNumber3 = [100, 200, 300, 400];
var result = myNumber3.reduce(function (acc, val) {
    console.log("\"Accumulator\" ".concat(acc, " and 'current value' ").concat(val));
    return acc + val;
}, 0);
//console.log(result)
var myCart = [
    { product: "Sketchers", price: 25000, category: "Shoes" },
    { product: "Shirt", price: 5000, category: "Clothing" },
    { product: "Nike", price: 20000, category: "Shoes" },
    { product: "Addidas", price: 22000, category: "Shoes" },
    { product: "Trouser", price: 8000, category: "Clothing" },
];
var totalBill = myCart.reduce(function (acc, val) { return acc + val.price; }, 250);
//console.log(totalBill);
var allCourses = [
    { coursename: "TypeScript", price: 3000 },
    { coursename: "javaScript", price: 2500 },
    { coursename: "HTML", price: 1000 },
    { coursename: "CSS", price: 500 },
];
var selectedCourses = ["TypeScript", "javaScript"];
var coursePrice = allCourses.filter(function (course) { return selectedCourses.includes(course.coursename); })
    .reduce(function (acc, course) { return acc + course.price; }, 0);
console.log(coursePrice);
