//1. Convert the string "123" to a number and add 7.
function strToNum(strnum) {
    let num = Number(strnum);  
    let result = num + 7;     
    return result;
}
console.log(strToNum("123"));   


//2. Check if the given variable is falsy and return "Invalid" if it is.
function checkFalsy(num) {
    if (!num) {
        return "Invalid";
    }
    else{
        return "Valid";
    }
}
console.log(checkFalsy(0));  





//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  
    }
    console.log(i);
}                        
// to make it with  a function * but I am wondering if it is must *
function oddNum(s, e) {
    for (let i = s; i <= e; i++) {
        if (i % 2 === 0) {
            continue; 
        }
        console.log(i);
    }
}
oddNum(1, 10);


//4.Create an array of numbers and return only the even numbers using filter method.
function evenNum(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evenNum([1, 2, 3, 4, 5]));  


//5. Use the spread operator to merge two arrays, then return the merged array.
function merge(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(merge([1, 2, 3], [4, 5, 6])); 

//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

function dayOfWeek(num) {
    switch(num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid number";
    }
}
console.log(dayOfWeek(2)); 

//7.Create an array of strings and return their lengths using map method
function Lengths(arr) {
    return arr.map(str => str.length);
}

console.log(Lengths(["a", "ab", "abc"]));

//8. Write a function that checks if a number is divisible by 3 and 5
function isDivisibleBy3And5(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'Divisible by both';
    } 
}
console.log(isDivisibleBy3And5(15)); 


//9. Write a function using arrow syntax to return the square of a number
function square(num) {
    return num * num;
}

console.log(square(5));

//10.Write a function that destructures an object to extract values and returns a formatted string.
let person ={
     name: 'John', 
     age: 25 
    };

function Person({ name, age }) {
    return `${name} is ${age} years old`;
}

console.log(Person(person)); 

//11.Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum(a, b, c,d,e) {
    return a + b + c + d + e;
}
console.log(sum(1, 2, 3, 4, 5));

//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
function Success() {
    return new Promise(r => {
        setTimeout(() => {
            r("Success");
        }, 3000);
    });
}
console.log(Success()) // I just try to do it and searched but no output it is just pending

//13. Write a function to find the largest number in an array.
function getLargest(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) largest = num;
    }
    return largest;
}
console.log(getLargest([1, 3, 7, 2, 4]));

//14. Write a function that takes an object and returns an array containing only its keys.
function key(obj) {
    return Object.keys(obj);
}
const person1 = { name: "John", age: 30 };
console.log(key(person1));


//15. Write a function that splits a string into an array of words based on spaces.
function splitstr(str) {
    return str.split(" ");
}
console.log(splitstr("The quick brown fox")); // I searched for the functon split
