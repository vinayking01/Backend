
//Lodash is a JavaScript utility library that provides a wide range of functions to work with arrays, objects, strings, functions, and more. It is widely used in both frontend (browser-based) and backend (Node.js)

const _ = require('lodash'); // this is the industry standard defined to store loadash module in _ , other than this we can also store in any varibale name .

// let  num =  [1,2,34,55];
const numbers = [1, 2, 3, 4, 5,"dsds",20,3];
const sum = _.sum(numbers);
const demo =  [12,34,"sdds"]
console.log(sum)

console.log(_.add(numbers[2],10));  // additon of two numbers

console.log(_.chunk(numbers,4))  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

console.log(_.concat(numbers,demo))

console.log(_.lastIndexOf(numbers,3)) //This method is like _.indexOf except that it iterates over elements of array from right to left.
 
console.log(_.pull(numbers,3,"dsds")); //Removes all given values from array using SameValueZero for equality comparisons.
// console.log(numbers)
console.log(_.remove(numbers,(n)=>{  // Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
    if(n%2 != 0)
    {
        return n;
    }
}))

console.log(numbers)

console.log("slice ",_.slice(numbers,0,2)," after slice ", numbers); //Creates a slice of array from start up to, but not including, end.

console.log(_.filter(numbers,(n)=>{ //_.filter: Returns an array containing all elements of a collection that satisfy a given predicate function.
    if(n%2 == 0 )
    {
        return n;
    }
}))
// var users = [
//     { 'user': 'barney',  'age': 36, 'active': true },
//     { 'user': 'fred',    'age': 40, 'active': false },
//     { 'user': 'pebbles', 'age': 1,  'active': true }
//   ];
   
//  console.log( _.find(users, function(o) { return o.age < 40; }));
const foundElement = _.find(numbers, function(n) {return n == 20}); //Iterates over elements of collection, returning the first element predicate returns truthy for
console.log(foundElement); 

console.log(_.includes(numbers,2)) ;//Checks if value is in collection. If collection is a string,

console.log(_.min(numbers))